import {
  AoSU,
  AoSUMessageNode,
  AoSUPage,
  DataItemPartial,
} from '../../../types/ao.js';
import { HTTPClient } from '../../../types/http.js';
import { AxiosHTTPService } from '../http.js';

export class RemoteSU implements AoSU {
  readonly suUrl: string;
  private http: HTTPClient;
  constructor({
    suUrl,
    http = new AxiosHTTPService({ url: suUrl }),
  }: {
    suUrl: string;
    http?: HTTPClient;
  }) {
    this.suUrl = suUrl;
    this.http = http;
  }

  async getProcessMessages({
    processId,
    from,
    to,
    limit,
  }: {
    processId: string;
    from?: string;
    to?: string;
    limit?: EpochTimeStamp; // i32 - Epoch timestamp?
  }): Promise<AoSUPage> {
    return this.http.get<unknown, AoSUPage>({
      endpoint: `/${processId}`,
      params: { from, to, limit },
    });
  }
  async getProcessMessage({
    processId,
    messageId,
    from,
    to,
    limit,
  }: {
    processId: string;
    messageId: string;
    from?: string;
    to?: string;
    limit?: EpochTimeStamp; // i32 - Epoch timestamp?
  }): Promise<AoSUMessageNode> {
    return this.http.get<unknown, AoSUMessageNode>({
      endpoint: `/${messageId}`,
      params: { from, to, limit, ['process-id']: processId },
    });
  }
  async getProcess({
    processId,
  }: {
    processId: string;
  }): Promise<DataItemPartial> {
    return this.http.get<unknown, DataItemPartial>({
      endpoint: `/processes/${processId}`,
    });
  }
}
