import BetterSQLite3 from 'better-sqlite3';
import Libhoney from 'libhoney';

import { AoEvent, IEventTransport, ILogger } from '../../index.js';

export declare class HoneycombTransport implements IEventTransport {
  apiHost: string;
  writeKey: string;
  honey: Libhoney;
  dbFilePath: string;
  dbInitialized: boolean;
  db: BetterSQLite3.Database | undefined;
  largestNonces: Record<string, number>;
  logger: ILogger;
  updateNonceStmt: BetterSQLite3.Statement | undefined;
  constructor({
    writeKey,
    dataset,
    apiHost,
    dbFilePath,
    logger,
  }: {
    writeKey: any;
    dataset: any;
    apiHost?: string | undefined;
    dbFilePath?: string | undefined;
    logger?: any;
  });
  ensureDbInitialized(): void;
  ensureLargestNonces(): void;
  createDatabase(): void;
  loadLargestNonces(): void;
  getLargestNonce(processId: string): number;
  updateLargestNonce(processId: string, nonce: number): void;
  sendEvents(
    events: AoEvent[],
    processId: string,
    nonce: number,
  ): Promise<void>;
}
