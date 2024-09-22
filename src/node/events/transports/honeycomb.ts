import { defaultLogger } from '@/common/constants.js';
import { AoEvent, IEventTransport } from '@/common/events/event-transport.js';
import { isAoEvent } from '@/utils/ao.js';
import { ILogger } from '@/utils/logger.js';
import BetterSQLite3 from 'better-sqlite3';
import fs from 'fs';
import Libhoney from 'libhoney';

export class HoneycombTransport implements IEventTransport {
  apiHost: string;
  writeKey: string;
  honey: Libhoney;
  dbFilePath: string;
  dbInitialized: boolean;
  db: BetterSQLite3.Database | undefined; // Better-sqlite3 Database instance
  largestNonces: Record<string, number>; // Stores processId as key and nonce as value
  logger: ILogger;
  updateNonceStmt: BetterSQLite3.Statement | undefined; // SQLite prepared statement

  constructor({
    writeKey,
    dataset,
    apiHost = 'https://api.honeycomb.io',
    dbFilePath = './largest_nonces.db',
    logger = defaultLogger.child('hc-transport'),
  }) {
    this.apiHost = apiHost;
    this.writeKey = writeKey;
    this.honey = new Libhoney({
      writeKey,
      dataset,
    });
    this.dbFilePath = dbFilePath;
    this.dbInitialized = false;
    this.db = undefined;
    this.largestNonces = {};
    this.logger = logger;
    this.updateNonceStmt = undefined;
  }

  ensureDbInitialized() {
    if (!this.dbInitialized) {
      this.logger.info('Initializing SQLite database...');
      if (!fs.existsSync(this.dbFilePath)) {
        this.createDatabase();
      } else {
        this.db = new BetterSQLite3(this.dbFilePath);
        this.loadLargestNonces();
      }
      this.dbInitialized = true;
    }
  }

  ensureLargestNonces() {
    if (!this.dbInitialized) {
      this.logger.info('Initializing SQLite database...');
      if (!fs.existsSync(this.dbFilePath)) {
        this.createDatabase();
      } else {
        this.db = new BetterSQLite3(this.dbFilePath);
        this.loadLargestNonces();
      }
      this.dbInitialized = true;
    }
  }

  createDatabase() {
    this.logger.info(
      'Creating, if necessary, SQLite database and table for largest nonces...',
    );
    this.db = new BetterSQLite3(this.dbFilePath);
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS largest_nonces (
      processId TEXT PRIMARY KEY,
      nonce INTEGER
      );
    `);
  }

  loadLargestNonces() {
    this.ensureDbInitialized();
    if (!this.db) {
      return;
    }
    const stmt: BetterSQLite3.Statement = this.db.prepare(
      'SELECT processId, nonce FROM largest_nonces',
    );
    const rows = stmt.all() as {
      processId: string;
      nonce: number;
    }[];
    for (const row of rows) {
      this.largestNonces[row.processId] = row.nonce;
    }
    this.logger.info(
      `Loaded largest nonces:\n${JSON.stringify(this.largestNonces, null, 2)}`,
    );
  }

  getLargestNonce(processId: string) {
    return this.largestNonces[processId] || 0; // TODO: is -1 more appropriate?
  }

  updateLargestNonce(processId: string, nonce: number) {
    if (!this.updateNonceStmt) {
      this.ensureDbInitialized();
      if (!this.db) {
        return;
      }

      this.updateNonceStmt = this.db.prepare(`
        INSERT INTO largest_nonces (processId, nonce)
        VALUES (?, ?)
        ON CONFLICT(processId) DO UPDATE SET nonce = excluded.nonce WHERE excluded.nonce > largest_nonces.nonce;
      `);
    }
    this.updateNonceStmt.run(processId, nonce);
    this.logger.info(
      `[ProcID: ${processId}; Nonce: ${nonce}]: Updated largest nonce in db.`,
    );
    this.largestNonces[processId] = nonce;
  }

  async sendEvents(events: AoEvent[], processId: string, nonce: number) {
    this.ensureLargestNonces();
    const currentMaxNonce = this.getLargestNonce(processId);

    if (nonce > currentMaxNonce) {
      events.forEach((event) => {
        const honeyEvent = this.honey.newEvent();
        honeyEvent.add({
          processId,
          nonce,
          ...event,
        });

        // Set the ingest timestamp for the event if one is provided
        if (event.timestamp || event.Timestamp) {
          honeyEvent.timestamp = event.timestamp ?? event.Timestamp;
        }
        if (event.sampleRate !== undefined && isAoEvent(honeyEvent)) {
          honeyEvent.sampleRate = event.sampleRate;
        }
        honeyEvent.send();
        this.updateLargestNonce(processId, nonce);
      });
      this.logger.info(
        `[ProcID: ${processId}; Nonce: ${nonce}]: Sent events to Honeycomb.`,
      );
    } else {
      this.logger.info(
        `[ProcID: ${processId}; Nonce: ${nonce}]: Skipping previous event (max nonce ${currentMaxNonce}).`,
      );
    }
  }
}
