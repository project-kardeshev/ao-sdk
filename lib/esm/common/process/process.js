import { isWritableProcessConfig } from '../../types/ao.js';
import { defaultLogger } from '../constants.js';
import { AO, RemoteCU } from '../index.js';
import { RemoteMU } from '../services/mu/remote-mu.js';
import { RemoteSU } from '../services/su/remote-su.js';

export class Process {
  logger;
  ao;
  processId;
  constructor({ processId, ao, logger = defaultLogger }) {
    this.logger = logger;
    this.ao = ao;
    this.processId = processId;
  }
  static init(config) {
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
  }) {
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
export class ProcessReadable {
  logger;
  ao;
  processId;
  constructor({ logger = defaultLogger, ao, processId }) {
    this.logger = logger;
    this.ao = ao;
    this.processId = processId;
  }
  async read({ tags, data }, options) {
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
export class ProcessWritable extends ProcessReadable {
  signer;
  constructor({ signer, ...config }) {
    super(config);
    this.signer = signer;
  }
  async write({ tags, data }, options) {
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
