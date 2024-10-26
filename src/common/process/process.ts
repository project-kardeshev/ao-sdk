import {
  AoCompositeProvider,
  AoEvaluationOptions,
  AoProcess,
  AoProcessRead,
  AoProcessWrite,
  AoSigner,
} from '@/types/ao.js';
import { Logger } from '@/utils/logger.js';

export type ProcessConfig = {
  logger: Logger;
  ao: AoCompositeProvider;
  processId: string;
};

export class Process implements AoProcess {
  readonly logger: Logger;
  readonly ao: AoCompositeProvider;
  readonly processId: string;
  constructor({
    logger,
    ao,
    processId,
  }: {
    logger: Logger;
    ao: AoCompositeProvider;
    processId: string;
  }) {
    this.logger = logger;
    this.ao = ao;
    this.processId = processId;
  }
}

export class ProcessReadable extends Process implements AoProcessRead {
  constructor(config: ProcessConfig) {
    super(config);
  }

  async read(
    {
      tags,
      data,
      target,
    }: {
      tags?: { name: string; value: string }[];
      data?: string | number;
      target?: string;
    },
    options?: AoEvaluationOptions,
  ) {
    try {
      this.logger.info('Dryrun', {
        tags,
        data,
        target,
      });
      const result = await this.ao.dryrun(
        {
          message: {
            Tags: tags,
            Data: data,
            Target: target,
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
  readonly signer: AoSigner;
  constructor({ signer, ...config }: ProcessConfig & { signer: AoSigner }) {
    super(config);
    this.signer = signer;
  }

  async write(
    {
      tags,
      data,
      target,
    }: {
      tags?: { name: string; value: string }[];
      data?: string | number;
      target?: string;
    },
    options?: AoEvaluationOptions,
  ) {
    try {
      this.logger.info('Message', {
        tags,
        data,
        target,
      });
      const messageId = await this.ao.message(
        {
          message: {
            Tags: tags,
            Data: data,
            Target: target,
          },
          signer: this.signer,
        },
        options,
      );
      this.logger.info('Message ID', messageId);

      const result = await this.ao.result({ messageId }, options);
      this.logger.info(`Result for ${messageId}`, result);

      return result;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
