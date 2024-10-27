import {
  AoCompositeProvider,
  AoEvaluationOptions,
  AoProcess,
  AoProcessRead,
  AoProcessWrite,
  AoSigner,
  ProcessConfig,
  WritableProcessConfig,
} from '../../types/ao.js';
import { Logger } from '../../utils/logger.js';

export declare class Process implements AoProcess {
  readonly logger: Logger;
  readonly ao: AoCompositeProvider;
  readonly processId: string;
  constructor({
    processId,
    ao,
    logger,
  }: {
    processId: string;
    ao: AoCompositeProvider;
    logger: Logger;
  });
  static init(
    config: ProcessConfig & {
      signer: undefined | AoSigner;
    },
  ): ProcessReadable | ProcessWritable;
  static init(
    config: ProcessConfig & {
      signer?: undefined;
    },
  ): ProcessReadable;
  static init(
    config: ProcessConfig & {
      signer: AoSigner;
    },
  ): ProcessWritable;
  static createRemoteProcess({
    processId,
    cuUrl,
    muUrl,
    suUrl,
    signer,
    logger,
  }: {
    processId: string;
    cuUrl: string;
    muUrl: string;
    suUrl: string;
    signer?: AoSigner;
    logger?: Logger;
  }): Promise<ProcessReadable | ProcessWritable>;
}
export declare class ProcessReadable implements AoProcessRead {
  readonly logger: Logger;
  readonly ao: AoCompositeProvider;
  readonly processId: string;
  constructor({ logger, ao, processId }: ProcessConfig);
  read(
    {
      tags,
      data,
    }: {
      tags?: {
        name: string;
        value: string;
      }[];
      data?: string | number;
    },
    options?: AoEvaluationOptions,
  ): Promise<
    import('../../types/ao.js').AoResult & {
      Memory?: WebAssembly.Memory;
    }
  >;
}
export declare class ProcessWritable
  extends ProcessReadable
  implements AoProcessWrite
{
  logger: Logger;
  ao: AoCompositeProvider;
  processId: string;
  readonly signer: AoSigner;
  constructor({ signer, ...config }: WritableProcessConfig);
  write(
    {
      tags,
      data,
    }: {
      tags?: {
        name: string;
        value: string;
      }[];
      data?: string;
    },
    options?: AoEvaluationOptions,
  ): Promise<
    import('../../types/ao.js').AoResult & {
      Memory?: WebAssembly.Memory;
    }
  >;
}
