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

export declare class AO implements AoCompositeProvider {
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
  });
  dryrun(
    p: {
      message: Partial<AoMessage> & {
        Target: string;
      };
    },
    options?: Pick<AoEvaluationOptions, 'messageId'>,
  ): Promise<AoResult>;
  result(
    p: {
      messageId: string;
      processId: string;
    },
    options?: AoEvaluationOptions | undefined,
  ): Promise<
    AoResult & {
      Memory?: WebAssembly.Memory | undefined;
    }
  >;
  state(
    p: {
      processId: string;
    },
    options?: AoEvaluationOptions,
  ): Promise<WebAssembly.Memory>;
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
  getProcessMessages(p: {
    processId: string;
    from?: string;
    to?: string;
    limit?: number;
  }): Promise<AoSUPage>;
  getProcessMessage(p: {
    messageId: string;
    processId: string;
  }): Promise<AoSUMessageNode>;
  getProcess(p: { processId: string }): Promise<DataItemPartial>;
}
