import { AoCU, AoEvaluationOptions, AoMessage, AoResult } from '@/types/ao.js';
import AoLoader from '@permaweb/ao-loader';

export class LocalCU implements AoCU {
  async createHandler(p: { processId: string; memory: WebAssembly.Memory }) {}
  async dryrun(
    p: { message: Partial<AoMessage> },
    options?: AoEvaluationOptions | undefined,
  ): Promise<AoResult & { Memory?: WebAssembly.Memory | undefined }> {
    throw new Error('Method not implemented.');
  }

  async result(
    p: { messageId: string },
    options?: AoEvaluationOptions | undefined,
  ): Promise<AoResult & { Memory?: WebAssembly.Memory | undefined }> {
    throw new Error('Method not implemented.');
  }
}
