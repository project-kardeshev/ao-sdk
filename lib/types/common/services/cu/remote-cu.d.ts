import {
  AoCU,
  AoEvaluationOptions,
  AoMessage,
  AoResult,
} from '../../../types/ao.js';
import { HTTPClient } from '../../../types/http.js';

export declare class RemoteCU implements AoCU {
  readonly cuUrl: string;
  private http;
  constructor({ cuUrl, http }: { cuUrl: string; http?: HTTPClient });
  dryrun(
    {
      message,
    }: {
      message: Partial<AoMessage> & {
        Target: string;
      };
    },
    options?: Pick<AoEvaluationOptions, 'messageId'>,
  ): Promise<
    AoResult & {
      Memory: undefined;
    }
  >;
  result({
    messageId,
    processId,
  }: {
    messageId: string;
    processId: string;
  }): Promise<AoResult>;
  state(
    {
      processId,
    }: {
      processId: string;
    },
    options?: Pick<AoEvaluationOptions, 'toTimestamp'>,
  ): Promise<WebAssembly.Memory>;
}
