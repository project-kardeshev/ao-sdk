import { DataItem } from '@dha-team/arbundles';
import {
  dryrun,
  message,
  monitor,
  result,
  results,
  spawn,
  unmonitor,
} from '@permaweb/aoconnect';

import { EventVacuum } from '../common/index.js';
import { Logger } from '../utils/logger.js';
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
    | {
        name: 'Data-Protocol';
        value: 'ao';
      }
    | {
        name: 'Variant';
        value: 'ao.TN.1';
      }
    | {
        name: 'Type';
        value: 'Message';
      }
    | {
        name: 'Load';
        value: string;
      }
    | {
        name: 'Read-Only';
        value: 'True' | 'False';
      }
    | {
        name: 'From-Process';
        value: string;
      }
    | {
        name: 'From-Module';
        value: string;
      }
    | {
        name: 'Pushed-For';
        value: string;
      }
    | {
        name: 'Cast';
        value: 'True' | 'False';
      }
    | {
        name: string;
        value: string;
      }
  )[];
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
    | {
        name: 'Data-Protocol';
        value: 'ao';
      }
    | {
        name: 'Variant';
        value: 'ao.TN.1';
      }
    | {
        name: 'Type';
        value: 'Process';
      }
    | {
        name: 'Module';
        value: string;
      }
    | {
        name: 'Scheduler';
        value: string;
      }
    | {
        name: `Cron-Interval`;
        value: string;
      }
    | {
        name: `Cron-Tag-${string}`;
        value: string;
      }
    | {
        name: 'Memory-Limit';
        value: string;
      }
    | {
        name: 'Compute-Limit';
        value: number;
      }
    | {
        name: 'Pushed-For';
        value: string;
      }
    | {
        name: 'Cast';
        value: 'True' | 'False';
      }
    | {
        name: string;
        value: string;
      }
  )[];
};
export type AoModule = {
  Data: string | number;
  Anchor: string;
  Target: string;
  Tags: (
    | {
        name: 'Data-Protocol';
        value: 'ao';
      }
    | {
        name: 'Variant';
        value: 'ao.TN.1';
      }
    | {
        name: 'Type';
        value: 'Module';
      }
    | {
        name: 'Module-Format';
        value:
          | 'wasm32-unknown-emscripten'
          | 'wasm64-unknown-emscripten-draft_2024_02_15';
      }
    | {
        name: 'Input-Encoding';
        value: string;
      }
    | {
        name: 'Output-Encoding';
        value: string;
      }
    | {
        name: 'Memory-Limit';
        value: string;
      }
    | {
        name: 'Compute-Limit';
        value: number;
      }
    | {
        name: 'Extension';
        value: string;
      }
    | {
        name: string;
        value: string;
      }
  )[];
};
export type AoAssignment = {
  Data: string | number;
  Anchor: string;
  Target: string;
  Tags: (
    | {
        name: 'Data-Protocol';
        value: 'ao';
      }
    | {
        name: 'Variant';
        value: 'ao.TN.1';
      }
    | {
        name: 'Type';
        value: 'Assignment';
      }
    | {
        name: 'Process';
        value: string;
      }
    | {
        name: 'Epoch';
        value: number;
      }
    | {
        name: 'Nonce';
        value: number;
      }
    | {
        name: 'Hash-Chain';
        value: string;
      }
    | {
        name: 'Timestamp';
        value: number;
      }
    | {
        name: 'Message';
        value: string;
      }
    | {
        name: 'Block-Height';
        value: number;
      }
    | {
        name: string;
        value: string;
      }
  )[];
};
export type AoSchedulerLocation = {
  Data: string | number;
  Anchor: string;
  Target: string;
  Tags: (
    | {
        name: 'Data-Protocol';
        value: 'ao';
      }
    | {
        name: 'Variant';
        value: 'ao.TN.1';
      }
    | {
        name: 'Type';
        value: 'Scheduler-Location';
      }
    | {
        name: 'Url';
        value: string;
      }
    | {
        name: 'Time-To-Live';
        value: number;
      }
  )[];
};
export type AoSchedulerTransfer = {
  Data: string | number;
  Anchor: string;
  Target: string;
  Tags: (
    | {
        name: 'Data-Protocol';
        value: 'ao';
      }
    | {
        name: 'Variant';
        value: 'ao.TN.1';
      }
    | {
        name: 'Type';
        value: 'Scheduler-Transfer';
      }
    | {
        name: 'Scheduler';
        value: string;
      }
    | {
        name: 'Next-Scheduler';
        value: string;
      }
    | {
        name: 'Length';
        value: number;
      }
    | {
        name: 'Process';
        value: string;
      }
    | {
        name: 'Hash-Chain';
        value: string;
      }
    | {
        name: 'Timestamp';
        value: number;
      }
    | {
        name: 'Epoch';
        value: number;
      }
    | {
        name: 'Nonce';
        value: number;
      }
  )[];
};
export type AoCheckpoint = {
  Data: string | number;
  Anchor: string;
  Target: string;
  Tags: (
    | {
        name: 'Data-Protocol';
        value: 'ao';
      }
    | {
        name: 'Variant';
        value: 'ao.TN.1';
      }
    | {
        name: 'Type';
        value: 'Checkpoint';
      }
    | {
        name: 'Module';
        value: string;
      }
    | {
        name: 'Process';
        value: string;
      }
    | {
        name: 'Epoch';
        value: number;
      }
    | {
        name: 'Nonce';
        value: number;
      }
    | {
        name: 'Timestamp';
        value: number;
      }
    | {
        name: 'Block-Height';
        value: number;
      }
    | {
        name: 'Cron-Interval';
        value: string;
      }
    | {
        name: 'Content-Type';
        value: 'application/octet-stream';
      }
    | {
        name: 'Content-Encoding';
        value: string;
      }
    | {
        name: 'SHA-256';
        value: string;
      }
    | {
        name: string;
        value: string;
      }
  )[];
};
export type DataItemPartial = Partial<
  Pick<DataItem, 'tags' | 'data' | 'anchor'>
>;
export type AoSigner = (args: {
  data?: string | Buffer;
  tags?: {
    name: string;
    value: string;
  }[];
  target?: string;
  anchor?: string;
}) => Promise<{
  id: string;
  raw: ArrayBuffer;
}>;
export interface AoMemoryProvider {
  su: AoSU;
  txCache: AoMessageCache;
  getMemory(p?: {
    timestamp?: number;
    messageId?: string;
  }): Promise<WebAssembly.Memory>;
  setMemory(memory: WebAssembly.Memory): Promise<void>;
  sha256(): Promise<string>;
  getNonce(): Promise<number>;
}
export type AoEvaluationOptions = {
  toTimestamp?: EpochTimeStamp;
  fromTimestamp?: EpochTimeStamp;
  messageId?: string;
  processEvents?: boolean;
  memory?: WebAssembly.Memory;
};
export interface AoCU {
  dryrun(
    p: {
      message: Partial<AoMessage> & {
        Target: string;
      };
    },
    options?: AoEvaluationOptions,
  ): Promise<
    AoResult & {
      Memory?: WebAssembly.Memory;
    }
  >;
  result(
    p: {
      messageId: string;
      processId: string;
    },
    options?: AoEvaluationOptions,
  ): Promise<
    AoResult & {
      Memory?: WebAssembly.Memory;
    }
  >;
  state(
    p: {
      processId: string;
    },
    options?: AoEvaluationOptions,
  ): Promise<WebAssembly.Memory>;
}
export interface AoMU {
  message(
    p: DataItemPartial & {
      processId: string;
      signer: AoSigner;
    },
    options?: AoEvaluationOptions,
  ): Promise<string>;
  monitor(
    p: DataItemPartial & {
      processId: string;
      signer: AoSigner;
    },
  ): Promise<string>;
  unmonitor(
    p: DataItemPartial & {
      processId: string;
      signer: AoSigner;
    },
  ): Promise<string>;
}
export type AoSUMessageNode = {
  message: {
    id: string;
    tags: {
      name: string;
      value: string;
    }[];
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
export type AoSUPage = {
  page_info: {
    has_next_page: boolean;
  };
  edges: {
    cursor: string;
    node: AoSUMessageNode;
  }[];
};
export interface AoSU {
  getProcessMessages(p: {
    processId: string;
    from?: string;
    to?: string;
    limit?: EpochTimeStamp;
  }): Promise<AoSUPage>;
  getProcessMessage(p: {
    messageId: string;
    processId: string;
  }): Promise<AoSUMessageNode>;
  getProcess(p: { processId: string }): Promise<DataItemPartial>;
}
export interface AoCompositeProvider extends AoCU, AoMU, AoSU {
  cu: AoCU;
  mu: AoMU;
  su: AoSU;
  txCache?: AoMessageCache;
  eventManager?: EventVacuum;
  memoryManager?: AoMemoryProvider;
}
export type ProcessConfig = {
  logger?: Logger;
  ao: AoCompositeProvider;
  processId: string;
};
export type WritableProcessConfig = ProcessConfig & {
  signer: AoSigner;
};
export declare function isWritableProcessConfig(
  config: ProcessConfig,
): config is WritableProcessConfig;
export interface AoProcess {
  logger: Logger;
  ao: AoCompositeProvider;
  processId: string;
}
export interface AoProcessRead extends AoProcess {
  read(
    p: {
      tags?: {
        name: string;
        value: string;
      }[];
      data?: string | number;
      target?: string;
    },
    options?: AoEvaluationOptions,
  ): Promise<AoResult>;
}
export interface AoProcessWrite extends AoProcessRead {
  signer: AoSigner;
  write(
    p: {
      tags?: {
        name: string;
        value: string;
      }[];
      data?: string | number;
      target?: string;
    },
    options?: AoEvaluationOptions,
  ): Promise<AoResult>;
}
