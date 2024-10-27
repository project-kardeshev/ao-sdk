import {
  AoCU,
  AoCompositeProvider,
  AoEvaluationOptions,
  AoMU,
  AoMemoryProvider,
  AoMessage,
  AoResult,
  AoSU,
  AoSUMessageNode,
  AoSUPage,
  AoSigner,
  DataItemPartial,
} from '../../types/ao.js';
import { AoMessageCache } from '../../types/cache.js';
import { EventVacuum } from '../events/event-vacuum.js';

export class AO implements AoCompositeProvider {
  cu: AoCU;
  mu: AoMU;
  su: AoSU;
  eventManager?: EventVacuum;
  memoryManager?: AoMemoryProvider;
  txCache?: AoMessageCache;

  constructor({
    cu,
    mu,
    su,
    txCache,
    memoryManager,
    eventManager,
  }: {
    cu: AoCU;
    mu: AoMU;
    su: AoSU;
    txCache?: AoMessageCache;
    memoryManager?: AoMemoryProvider;
    eventManager?: EventVacuum;
  }) {
    this.cu = cu;
    this.mu = mu;
    this.su = su;
    this.txCache = txCache;
    this.memoryManager = memoryManager;
    this.eventManager = eventManager;
  }

  async dryrun(
    p: { message: Partial<AoMessage> & { Target: string } },
    options?: Pick<AoEvaluationOptions, 'messageId'>,
  ): Promise<AoResult> {
    return this.cu.dryrun(p, options);
  }

  async result(
    p: { messageId: string; processId: string },
    options?: AoEvaluationOptions | undefined,
  ): Promise<AoResult & { Memory?: WebAssembly.Memory | undefined }> {
    return this.cu.result(p, options);
  }

  async state(
    p: { processId: string },
    options?: AoEvaluationOptions,
  ): Promise<WebAssembly.Memory> {
    return this.cu.state(p, options);
  }

  async message(
    p: DataItemPartial & {
      processId: string;
      signer: AoSigner;
    },
    options?: AoEvaluationOptions,
  ): Promise<string> {
    return this.mu.message(p, options);
  }

  async monitor(
    p: DataItemPartial & {
      processId: string;
      signer: AoSigner;
    },
  ): Promise<string> {
    return this.mu.monitor(p);
  }

  async unmonitor(
    p: DataItemPartial & {
      processId: string;
      signer: AoSigner;
    },
  ): Promise<string> {
    return this.mu.unmonitor(p);
  }

  async getProcessMessages(p: {
    processId: string;
    from?: string;
    to?: string;
    limit?: number;
  }): Promise<AoSUPage> {
    return this.su.getProcessMessages(p);
  }

  async getProcessMessage(p: {
    messageId: string;
    processId: string;
  }): Promise<AoSUMessageNode> {
    return this.su.getProcessMessage(p);
  }

  async getProcess(p: { processId: string }): Promise<DataItemPartial> {
    return this.su.getProcess(p);
  }
}
