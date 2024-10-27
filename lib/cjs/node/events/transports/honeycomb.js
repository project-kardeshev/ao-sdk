'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.HoneycombTransport = void 0;
const better_sqlite3_1 = __importDefault(require('better-sqlite3'));
const fs_1 = __importDefault(require('fs'));
const libhoney_1 = __importDefault(require('libhoney'));
const index_js_1 = require('../../index.js');
class HoneycombTransport {
  apiHost;
  writeKey;
  honey;
  dbFilePath;
  dbInitialized;
  db; // Better-sqlite3 Database instance
  largestNonces; // Stores processId as key and nonce as value
  logger;
  updateNonceStmt; // SQLite prepared statement
  constructor({
    writeKey,
    dataset,
    apiHost = 'https://api.honeycomb.io',
    dbFilePath = './largest_nonces.db',
    logger = index_js_1.defaultLogger.child('hc-transport'),
  }) {
    this.apiHost = apiHost;
    this.writeKey = writeKey;
    this.honey = new libhoney_1.default({
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
      if (!fs_1.default.existsSync(this.dbFilePath)) {
        this.createDatabase();
      } else {
        this.db = new better_sqlite3_1.default(this.dbFilePath);
        this.loadLargestNonces();
      }
      this.dbInitialized = true;
    }
  }
  ensureLargestNonces() {
    if (!this.dbInitialized) {
      this.logger.info('Initializing SQLite database...');
      if (!fs_1.default.existsSync(this.dbFilePath)) {
        this.createDatabase();
      } else {
        this.db = new better_sqlite3_1.default(this.dbFilePath);
        this.loadLargestNonces();
      }
      this.dbInitialized = true;
    }
  }
  createDatabase() {
    this.logger.info(
      'Creating, if necessary, SQLite database and table for largest nonces...',
    );
    this.db = new better_sqlite3_1.default(this.dbFilePath);
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
    const stmt = this.db.prepare('SELECT processId, nonce FROM largest_nonces');
    const rows = stmt.all();
    for (const row of rows) {
      this.largestNonces[row.processId] = row.nonce;
    }
    this.logger.info(
      `Loaded largest nonces:\n${JSON.stringify(this.largestNonces, null, 2)}`,
    );
  }
  getLargestNonce(processId) {
    return this.largestNonces[processId] || 0; // TODO: is -1 more appropriate?
  }
  updateLargestNonce(processId, nonce) {
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
  async sendEvents(events, processId, nonce) {
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
        if (
          event.sampleRate !== undefined &&
          (0, index_js_1.isAoEvent)(honeyEvent)
        ) {
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
exports.HoneycombTransport = HoneycombTransport;
