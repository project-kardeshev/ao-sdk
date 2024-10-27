import {
  AoCU,
  AoEvaluationOptions,
  AoMessage,
  AoResult,
} from '../../../types/ao.js';
import { HTTPClient } from '../../../types/http.js';
import { AxiosHTTPService } from '../http.js';

export class RemoteCU implements AoCU {
  readonly cuUrl: string;

  private http: HTTPClient;
  constructor({
    cuUrl,
    http = new AxiosHTTPService({ url: cuUrl }),
  }: {
    cuUrl: string;
    http?: HTTPClient;
  }) {
    this.cuUrl = cuUrl;
    this.http = http;
  }
  async dryrun(
    { message }: { message: Partial<AoMessage> & { Target: string } },
    options?: Pick<AoEvaluationOptions, 'messageId'>,
  ): Promise<AoResult & { Memory: undefined }> {
    const result = await this.http.post<unknown, AoResult>({
      endpoint: `${this.cuUrl}/dry-run`,
      params: {
        ['process-id']: message.Target,
        to: options?.messageId,
      },
      data: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // TODO: might be able to return memory with this from remote CU - need timestamp of last message, which could be used to get state, then dry run the message after loading the process
    return { ...result, Memory: undefined };
  }
  async result({
    messageId,
    processId,
  }: {
    messageId: string;
    processId: string;
  }): Promise<AoResult> {
    const result = await this.http.get<unknown, AoResult>({
      endpoint: `${this.cuUrl}/result/${messageId}`,
      params: { ['process-id']: processId },
    });
    return result;
  }

  async state(
    {
      processId,
    }: {
      processId: string;
    },
    options?: Pick<AoEvaluationOptions, 'toTimestamp'>,
  ): Promise<WebAssembly.Memory> {
    const result = await this.http.get<unknown, WebAssembly.Memory>({
      endpoint: `${this.cuUrl}/state/${processId}`,
      params: { to: options?.toTimestamp },
    });
    return result;
  }
}
