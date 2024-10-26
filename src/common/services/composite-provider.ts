import {
  AoCU,
  AoEvaluationOptions,
  AoMU,
  AoMemoryProvider,
  AoMessage,
  AoResult,
  AoSU,
  AoSUMessageNode,
  AoSUPage,
  AoSigner,
} from '@/types/ao.js';
import { AoMessageCache } from '@/types/cache.js';
import AoLoader from '@permaweb/ao-loader';

import { EventVacuum } from '../events/event-vacuum.js';

export class AO implements AoServiceProvider {
  cu: AoCU;
  mu: AoMU;
  su: AoSU;
  eventManager: EventVacuum;
  memoryManager: AoMemoryProvider;

  constructor({
    cu,
    mu,
    su,

    eventManager,
  }: {
    cu: AoCU;
    mu: AoMU;
    su: AoSU;

    eventManager: EventVacuum;
  }) {
    this.cu = cu;
    this.mu = mu;
    this.su = su;
    this.eventManager = eventManager;
  }

  async getProcessMessages(p: {
    processId: string;
    from?: number;
    to?: number;
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

  async message(
    p: {
      message: Partial<AoMessage>;
      signer: AoSigner;
    },
    options?: AoEvaluationOptions,
  ): Promise<string> {
    return this.mu.message(p, options);
  }
}
