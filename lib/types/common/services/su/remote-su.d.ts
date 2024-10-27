import {
  AoSU,
  AoSUMessageNode,
  AoSUPage,
  DataItemPartial,
} from '../../../types/ao.js';
import { HTTPClient } from '../../../types/http.js';

export declare class RemoteSU implements AoSU {
  readonly suUrl: string;
  private http;
  constructor({ suUrl, http }: { suUrl: string; http?: HTTPClient });
  getProcessMessages({
    processId,
    from,
    to,
    limit,
  }: {
    processId: string;
    from?: string;
    to?: string;
    limit?: EpochTimeStamp;
  }): Promise<AoSUPage>;
  getProcessMessage({
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
    limit?: EpochTimeStamp;
  }): Promise<AoSUMessageNode>;
  getProcess({ processId }: { processId: string }): Promise<DataItemPartial>;
}
