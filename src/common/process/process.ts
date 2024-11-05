import { EventEmitter } from 'eventemitter3';

import {
  AoCompositeProvider,
  AoEvaluationOptions,
  AoProcess,
  AoProcessRead,
  AoProcessWrite,
  AoResult,
  AoSUMessageNode,
  AoSigner,
  AoWriteOptions,
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

  static createRemoteProcess({
    processId,
    cuUrl = 'http://cu.ao-testnet.xyz',
    muUrl = 'http://mu.ao-testnet.xyz',
    suUrl = 'http://su.ao-testnet.xyz',
    signer,
    logger,
  }: {
    processId: string;
    cuUrl?: string;
    muUrl?: string;
    suUrl?: string;
    signer?: AoSigner;
    logger?: Logger;
  }): ProcessReadable | ProcessWritable {
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

export class ProcessReadable extends EventEmitter implements AoProcessRead {
  readonly logger: Logger;
  readonly ao: AoCompositeProvider;
  readonly processId: string;
  private pollInterval?: NodeJS.Timeout;
  lastMessageId?: string;
  constructor({ logger = defaultLogger, ao, processId }: ProcessConfig) {
    super();
    this.logger = logger;
    this.ao = ao;
    this.processId = processId;
  }

  // Polling function to check for new transactions/messages
  startPolling(interval = 5000) {
    this.pollInterval = setInterval(async () => {
      try {
        const messages = await this.checkForNewMessages();
        // sort messages oldest to newest
        messages.sort((a, b) => a.timestamp - b.timestamp);
        messages.forEach((message) => this.emit('message', message));
        this.lastMessageId = messages.at(-1)?.message.id;
      } catch (error) {
        this.logger.error('Polling error:', error);
      }
    }, interval);
  }

  stopPolling() {
    if (this.pollInterval) clearInterval(this.pollInterval);
  }

  private async checkForNewMessages(): Promise<AoSUMessageNode[]> {
    const messages = await this.ao.su.getProcessMessages({
      processId: this.processId,
      from: this.lastMessageId,
    });
    return messages.edges.map((suPage) => suPage.node);
  }

  /**
   * @param param0 - the tags and data to be passed to dryrun
   * @returns @type {Promise<AoResult>}
   */
  async read({ tags, data }: AoWriteOptions, options?: AoEvaluationOptions) {
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
    { tags, data }: AoWriteOptions,
    options?: AoEvaluationOptions,
  ): Promise<{ id: string; result: AoResult }> {
    try {
      this.logger.info('Message', {
        tags,
        data,
        target: this.processId,
      });
      const messageId = await this.ao.message(
        {
          tags,
          data: data?.toString(),
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

      return { id: messageId, result };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
