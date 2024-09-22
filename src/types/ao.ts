import { EventVacuum } from '@/common/events/event-vacuum.js';
import { Logger } from '@/utils/logger.js';
import {
  dryrun,
  message,
  monitor,
  result,
  results,
  spawn,
  unmonitor,
} from '@permaweb/aoconnect';

import { AoMessageCache } from './cache.js';

export interface AoClient {
  result: typeof result;
  results: typeof results;
  message: typeof message;
  spawn: typeof spawn;
  monitor: typeof monitor;
  unmonitor: typeof unmonitor;
  dryrun: typeof dryrun;
}

export type AoMessage = {
  Data: string | number;
  Anchor: string;
  Target: string;
  Tags: (
    | { name: 'Data-Protocol'; value: 'ao' }
    | { name: 'Variant'; value: 'ao.TN.1' }
    | { name: 'Type'; value: 'Message' }
    | { name: 'Load'; value: string } // TXID
    | { name: 'Read-Only'; value: 'True' | 'False' }
    | { name: 'From-Process'; value: string } // TXID
    | { name: 'From-Module'; value: string } // TXID
    | { name: 'Pushed-For'; value: string } // TXID
    | { name: 'Cast'; value: 'True' | 'False' }
    | { name: string; value: string }
  )[]; // Custom Tags
};

export type AoResult = {
  Messages: AoMessage[];
  Assignments: AoAssignment[];
  Spawns: AoSpawn[];
  Output: Record<string, string | boolean | number> | string;
  GasUsed: number;
};

export type AoSpawn = {
  Data: string | number;
  Anchor: string;
  Target: string;
  Tags: (
    | { name: 'Data-Protocol'; value: 'ao' }
    | { name: 'Variant'; value: 'ao.TN.1' }
    | { name: 'Type'; value: 'Process' }
    | { name: 'Module'; value: string } // TXID linking the process to the AO module
    | { name: 'Scheduler'; value: string } // Wallet address or Scheduler location
    | { name: `Cron-Interval`; value: string } // Optional: Interval format (e.g., "1-second")
    | { name: `Cron-Tag-${string}`; value: string } // Optional: Custom cron tags
    | { name: 'Memory-Limit'; value: string } // Optional: memory limit (e.g., "16-mb")
    | { name: 'Compute-Limit'; value: number } // Optional: compute cycle cap (e.g., 1000)
    | { name: 'Pushed-For'; value: string } // Optional: TXID the process is pushed as a result of
    | { name: 'Cast'; value: 'True' | 'False' } // Optional: Handle message pushing
    | { name: string; value: string }
  )[]; // Custom tags
};
export type AoModule = {
  Data: string | number;
  Anchor: string;
  Target: string;
  Tags: (
    | { name: 'Data-Protocol'; value: 'ao' }
    | { name: 'Variant'; value: 'ao.TN.1' }
    | { name: 'Type'; value: 'Module' }
    | {
        name: 'Module-Format';
        value:
          | 'wasm32-unknown-emscripten'
          | 'wasm64-unknown-emscripten-draft_2024_02_15';
      }
    | { name: 'Input-Encoding'; value: string } // e.g., "JSON-1"
    | { name: 'Output-Encoding'; value: string } // e.g., "JSON-1"
    | { name: 'Memory-Limit'; value: string } // Optional: Memory limit (e.g., "16-mb", "1-gb")
    | { name: 'Compute-Limit'; value: number } // Optional: Compute cycle limit (e.g., 1000)
    | { name: 'Extension'; value: string } // Optional, eg "WeaveDrive"
    | { name: string; value: string }
  )[]; // Custom tags
};

export type AoAssignment = {
  Data: string | number;
  Anchor: string;
  Target: string;
  Tags: (
    | { name: 'Data-Protocol'; value: 'ao' }
    | { name: 'Variant'; value: 'ao.TN.1' }
    | { name: 'Type'; value: 'Assignment' }
    | { name: 'Process'; value: string } // TXID
    | { name: 'Epoch'; value: number } // Scheduling event sequence
    | { name: 'Nonce'; value: number } // Unique increment per message within an Epoch
    | { name: 'Hash-Chain'; value: string } // Cryptographic link for data integrity
    | { name: 'Timestamp'; value: number } // UnixTimestamp with precise synchronization
    | { name: 'Message'; value: string } // Optional: TXID if it's a reference to an on-chain message
    | { name: 'Block-Height'; value: number } // Optional: Arweave blockchain block count
    | { name: string; value: string }
  )[]; // Custom tags for flexibility
};

export type AoSchedulerLocation = {
  Data: string | number;
  Anchor: string;
  Target: string;
  Tags: (
    | { name: 'Data-Protocol'; value: 'ao' }
    | { name: 'Variant'; value: 'ao.TN.1' }
    | { name: 'Type'; value: 'Scheduler-Location' }
    | { name: 'Url'; value: string } // Complete internet resource address
    | { name: 'Time-To-Live'; value: number }
  )[]; // Milliseconds for caching data URLs
};

export type AoSchedulerTransfer = {
  Data: string | number;
  Anchor: string;
  Target: string;
  Tags: (
    | { name: 'Data-Protocol'; value: 'ao' }
    | { name: 'Variant'; value: 'ao.TN.1' }
    | { name: 'Type'; value: 'Scheduler-Transfer' }
    | { name: 'Scheduler'; value: string } // WALLET_ADDRESS or NAME
    | { name: 'Next-Scheduler'; value: string } // TXID of the next Scheduler
    | { name: 'Length'; value: number } // Total messages created in the current epoch
    | { name: 'Process'; value: string } // TXID of the Process
    | { name: 'Hash-Chain'; value: string } // Cryptographic hash chain for data integrity
    | { name: 'Timestamp'; value: number } // NTP-synchronized Unix timestamp
    | { name: 'Epoch'; value: number } // The specific epoch for organized processing
    | { name: 'Nonce'; value: number }
  )[];
};

export type AoCheckpoint = {
  Data: string | number;
  Anchor: string;
  Target: string;
  Tags: (
    | { name: 'Data-Protocol'; value: 'ao' }
    | { name: 'Variant'; value: 'ao.TN.1' }
    | { name: 'Type'; value: 'Checkpoint' }
    | { name: 'Module'; value: string } // TXID of the module for the checkpoint
    | { name: 'Process'; value: string } // TXID of the process
    | { name: 'Epoch'; value: number } // Scheduling event sequence
    | { name: 'Nonce'; value: number } // Unique increment within an epoch
    | { name: 'Timestamp'; value: number } // NTP synchronized Unix timestamp
    | { name: 'Block-Height'; value: number } // Block height of creation
    | { name: 'Cron-Interval'; value: string } // Optional: Cron interval for this message
    | { name: 'Content-Type'; value: 'application/octet-stream' }
    | { name: 'Content-Encoding'; value: string } // Optional: Content encoding (e.g., gzip)
    | { name: 'SHA-256'; value: string } // Hash of the memory
    | { name: string; value: string }
  )[]; // Custom tags if necessary
};

export type AoSigner = (args: {
  data: string | Buffer;
  tags?: { name: string; value: string }[];
  target?: string;
  anchor?: string;
}) => Promise<{ id: string; raw: ArrayBuffer }>;

export interface AoMemoryProvider {
  getMemory(): Promise<WebAssembly.Memory>;
  setMemory(memory: WebAssembly.Memory): Promise<void>;
  sha256(): Promise<string>;
}
export interface AoCU {
  dryrun(p: { message: AoMessage }): Promise<AoResult>;
  result(p: { messageId: string }): Promise<AoResult>;
}

export interface AoMU {
  message(p: { message: AoMessage; signer: AoSigner }): Promise<string>;
  monitor(p: { processId: string; signer: AoSigner }): Promise<void>;
  unmonitor(p: { processId: string; signer: AoSigner }): Promise<void>;
  debug(p: {
    processId: string;
    messageId?: string;
    page?: number;
    pageSize?: number;
  }): Promise<any>;
}

export interface AoSU {
  messages(p: {
    processId: string;
    from?: number; // 	the Unix Timestamp to filter all messages after or equal to this value
    to?: number; // the Unix Timestamp to filter all messages before or equal to this value
  }): Promise<{
    page_info: {
      has_next_page: boolean;
    };
    edges: {
      cursor: string;
      node: {
        message: {
          id: string;
          tags: { name: string; value: string }[];
          signature: string;
        };
        block: string;
        owner: {
          address: string;
          key: string;
        };
        process_id: string;
        data: string;
        epoch: number;
        nonce: number;
        timestamp: number;
        hash_chain: string;
      };
    }[];
  }>;
}

export interface AoProcessRead {
  memoryManager: AoMemoryProvider;
  eventManager: EventVacuum;
  logger: Logger;
  cu: AoCU;

  read(p: {
    tags: { name: string; value: string }[];
    data: string | Buffer;
    target?: string;
  }): Promise<AoResult>;
}

export interface AoProcessWrite extends AoProcessRead {
  signer: AoSigner;
  txCache: AoMessageCache;
  write(p: {
    tags: { name: string; value: string }[];
    data: string | Buffer;
    target?: string;
  }): Promise<AoResult>;
}
