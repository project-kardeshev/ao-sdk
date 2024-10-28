import {
  AoCompositeProvider,
  AoEvaluationOptions,
  AoProcess,
  AoProcessRead,
  AoProcessWrite,
  AoSigner,
  ProcessConfig,
  WritableProcessConfig,
  isWritableProcessConfig,
} from '../../types/ao.js';
import { Logger } from '../../utils/logger.js';
import { defaultLogger } from '../constants.js';
import { AO, RemoteCU } from '../index.js';
import { RemoteMU } from '../services/mu/remote-mu.js';
import { RemoteSU } from '../services/su/remote-su.js';

export class Process implements AoProcess {
  readonly logger: Logger;
  readonly ao: AoCompositeProvider;
  readonly processId: string;
  constructor({
    processId,
    ao,
    logger = defaultLogger,
  }: {
    processId: string;
    ao: AoCompositeProvider;
    logger: Logger;
  }) {
    this.logger = logger;
    this.ao = ao;
    this.processId = processId;
  }

  /**
   *
   * @param config
   * @returns - ProcessReadable if no signer is provided, ProcessWritable if signer is provided
   */
  static init(
    config: ProcessConfig & { signer: undefined | AoSigner },
  ): ProcessReadable | ProcessWritable;
  static init(config: ProcessConfig & { signer?: undefined }): ProcessReadable;
  static init(config: ProcessConfig & { signer: AoSigner }): ProcessWritable;
  static init(
    config: ProcessConfig & { signer?: AoSigner | undefined },
  ): ProcessReadable | ProcessWritable {
    if (isWritableProcessConfig(config)) {
      return new ProcessWritable(config);
    }
    return new ProcessReadable(config);
  }

  static async createRemoteProcess({
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
  }): Promise<ProcessReadable | ProcessWritable> {
    return Process.init({
      processId,
      signer,
      logger,
      ao: new AO({
        cu: new RemoteCU({ cuUrl }),
        mu: new RemoteMU({ muUrl }),
        su: new RemoteSU({ suUrl }),
      }),
    });
  }
}

export class ProcessReadable implements AoProcessRead {
  readonly logger: Logger;
  readonly ao: AoCompositeProvider;
  readonly processId: string;
  constructor({ logger = defaultLogger, ao, processId }: ProcessConfig) {
    this.logger = logger;
    this.ao = ao;
    this.processId = processId;
  }

  /**
   * @param param0 - the tags and data to be passed to dryrun
   * @returns
   */
  async read(
    {
      tags,
      data,
    }: {
      tags?: { name: string; value: string }[];
      data?: string | number;
    },
    options?: AoEvaluationOptions,
  ) {
    try {
      this.logger.info('Dryrun', {
        tags,
        data,
        target: this.processId,
      });
      const result = await this.ao.dryrun(
        {
          message: {
            Tags: tags,
            Data: data,
            Target: this.processId,
          },
        },
        options,
      );
      this.logger.info('Dryrun result', result);

      return result;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}

export class ProcessWritable extends ProcessReadable implements AoProcessWrite {
  declare logger: Logger;
  declare ao: AoCompositeProvider;
  declare processId: string;
  readonly signer: AoSigner;
  constructor({ signer, ...config }: WritableProcessConfig) {
    super(config);
    this.signer = signer;
  }

  async write(
    {
      tags,
      data,
    }: {
      tags?: { name: string; value: string }[];
      data?: string;
    },
    options?: AoEvaluationOptions,
  ) {
    try {
      this.logger.info('Message', {
        tags,
        data,
        target: this.processId,
      });
      const messageId = await this.ao.message(
        {
          tags,
          data,
          processId: this.processId,
          signer: this.signer,
        },
        options,
      );
      this.logger.info('Message ID', messageId);

      const result = await this.ao.result(
        { messageId, processId: this.processId },
        options,
      );
      this.logger.info(`Result for ${messageId}`, result);

      return result;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
