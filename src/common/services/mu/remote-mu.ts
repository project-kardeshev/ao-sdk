import { AoMU, AoSigner, DataItemPartial } from '../../../types/ao.js';
import { HTTPClient } from '../../../types/http.js';
import { AxiosHTTPService } from '../http.js';

export class RemoteMU implements AoMU {
  readonly muUrl: string;
  private http: HTTPClient;

  constructor({
    muUrl,
    http = new AxiosHTTPService({ url: muUrl }),
  }: {
    muUrl: string;
    http?: HTTPClient;
  }) {
    this.muUrl = muUrl;
    this.http = http;
  }

  async message({
    processId,
    signer,
    ...message
  }: DataItemPartial & {
    processId: string;
    signer: AoSigner;
  }): Promise<string> {
    const dataItem = await signer({ target: processId, ...message });
    await this.http.post<unknown, string>({
      endpoint: `${this.muUrl}`,
      data: dataItem.raw,
      headers: {
        'Content-Type': 'application/octet-stream',
        Accept: 'application/json',
      },
    });

    return dataItem.id;
  }

  async monitor({
    processId,
    signer,
    ...message
  }: DataItemPartial & {
    processId: string;
    signer: AoSigner;
  }): Promise<string> {
    const dataItem = await signer({ target: processId, ...message });
    await this.http.post<unknown, string>({
      endpoint: `${this.muUrl}/monitor/${processId}`,
      data: dataItem.raw,
      headers: {
        'Content-Type': 'application/octet-stream',
        Accept: 'application/json',
      },
    });

    return dataItem.id;
  }

  async unmonitor({
    processId,
    signer,
    ...message
  }: DataItemPartial & {
    processId: string;
    signer: AoSigner;
  }): Promise<string> {
    const dataItem = await signer({ target: processId, ...message });
    await this.http.delete<unknown, string>({
      endpoint: `${this.muUrl}/monitor/${processId}`,
      data: dataItem.raw,
      headers: {
        'Content-Type': 'application/octet-stream',
        Accept: 'application/json',
      },
    });

    return dataItem.id;
  }
}
