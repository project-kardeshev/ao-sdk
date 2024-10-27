import { AoMU, AoSigner, DataItemPartial } from '../../../types/ao.js';
import { HTTPClient } from '../../../types/http.js';

export declare class RemoteMU implements AoMU {
  readonly muUrl: string;
  private http;
  constructor({ muUrl, http }: { muUrl: string; http?: HTTPClient });
  message({
    processId,
    signer,
    ...message
  }: DataItemPartial & {
    processId: string;
    signer: AoSigner;
  }): Promise<string>;
  monitor({
    processId,
    signer,
    ...message
  }: DataItemPartial & {
    processId: string;
    signer: AoSigner;
  }): Promise<string>;
  unmonitor({
    processId,
    signer,
    ...message
  }: DataItemPartial & {
    processId: string;
    signer: AoSigner;
  }): Promise<string>;
}
