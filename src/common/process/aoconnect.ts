import { connect } from '@permaweb/aoconnect';
import { EventEmitter } from 'eventemitter3';

import {
  AoConnectProcessConfig,
  AoProcess,
  AoProcessRead,
  AoProcessWrite,
  AoResult,
  AoSU,
  AoSUMessageNode,
  AoSigner,
  AoWriteOptions,
  WritableAoConnectProcessConfig,
  isWritableAoConnectProcessConfig,
} from '../../types/ao.js';
import { Logger } from '../../utils/logger.js';
import { defaultLogger } from '../constants.js';
import { RemoteSU } from '../index.js';

export type AoClient = ReturnType<typeof connect>;

export class AoConnectProcess implements AoProcess {
  readonly logger: Logger;
  readonly ao: AoClient;
  readonly processId: string;

  constructor(config: { processId: string; ao: AoClient; logger: Logger }) {
    this.logger = config.logger;
    this.ao = config.ao;
    this.processId = config.processId;
  }

  /**
   *
   * @param config
   * @returns - ProcessReadable if no signer is provided, ProcessWritable if signer is provided
   */
  static init(
    config: AoConnectProcessConfig & { signer: undefined | AoSigner },
  ): AoConnectProcessReadable | AoConnectProcessWritable;
  static init(
    config: AoConnectProcessConfig & { signer?: undefined },
  ): AoConnectProcessReadable;
  static init(
    config: AoConnectProcessConfig & { signer: AoSigner },
  ): AoConnectProcessWritable;
  static init(
    config: AoConnectProcessConfig & { signer?: AoSigner | undefined },
  ): AoConnectProcessReadable | AoConnectProcessWritable {
    if (
      isWritableAoConnectProcessConfig(config as WritableAoConnectProcessConfig)
    ) {
      return new AoConnectProcessWritable(
        config as WritableAoConnectProcessConfig,
      );
    }
    return new AoConnectProcessReadable(config);
  }

  static createRemoteProcess({
    processId,
    ao = connect(),
    signer,
    logger,
  }: {
    processId: string;
    ao?: AoClient;
    signer?: AoSigner;
    logger?: Logger;
  }): AoConnectProcessReadable | AoConnectProcessWritable {
    return AoConnectProcess.init({
      processId,
      signer,
      logger,
      ao,
    });
  }
}

export class AoConnectProcessReadable
  extends EventEmitter
  implements AoProcessRead
{
  readonly logger: Logger;
  readonly ao: AoClient;
  readonly su: AoSU;
  readonly processId: string;
  private pollInterval?: NodeJS.Timeout;
  lastMessageId?: string;
  constructor({
    logger = defaultLogger,
    ao,
    processId,
  }: AoConnectProcessConfig) {
    super();
    this.logger = logger;
    this.ao = ao;
    this.processId = processId;
    this.su = new RemoteSU({ suUrl: 'https://su-router.ao-testnet.xyz' });
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
    const messages = await this.su.getProcessMessages({
      processId: this.processId,
      from: this.lastMessageId,
    });
    return messages.edges.map((suPage) => suPage.node);
  }

  /**
   * @param param0 - the tags and data to be passed to dryrun
   * @returns @type {Promise<AoResult>}
   */
  async read({ tags, data }: AoWriteOptions) {
    try {
      this.logger.info('Dryrun', {
        tags,
        data,
        target: this.processId,
      });
      const result = await this.ao.dryrun({
        tags: tags,
        data: data,
        process: this.processId,
      });
      this.logger.info('Dryrun result', result);

      return result as AoResult;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}

export class AoConnectProcessWritable
  extends AoConnectProcessReadable
  implements AoProcessWrite
{
  declare logger: Logger;
  declare ao: AoClient;
  declare processId: string;
  readonly signer: AoSigner;
  constructor({ signer, ...config }: WritableAoConnectProcessConfig) {
    super(config);
    this.signer = signer;
  }

  async write({
    tags,
    data,
  }: AoWriteOptions): Promise<{ id: string; result: AoResult }> {
    try {
      this.logger.info('Message', {
        tags,
        data,
        target: this.processId,
      });
      const messageId = await this.ao.message({
        tags,
        data: data?.toString(),
        process: this.processId,
        signer: this.signer,
      });
      this.logger.info('Message ID', messageId);

      const result = await this.ao.result({
        message: messageId,
        process: this.processId,
      });
      this.logger.info(`Result for ${messageId}`, result);

      return { id: messageId, result: result as AoResult };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
