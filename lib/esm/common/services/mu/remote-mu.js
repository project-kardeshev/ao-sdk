import { AxiosHTTPService } from '../http.js';

export class RemoteMU {
  muUrl;
  http;
  constructor({ muUrl, http = new AxiosHTTPService({ url: muUrl }) }) {
    this.muUrl = muUrl;
    this.http = http;
  }
  async message({ processId, signer, ...message }) {
    const dataItem = await signer({ target: processId, ...message });
    await this.http.post({
      endpoint: `${this.muUrl}`,
      data: dataItem.raw,
      headers: {
        'Content-Type': 'application/octet-stream',
        Accept: 'application/json',
      },
    });
    return dataItem.id;
  }
  async monitor({ processId, signer, ...message }) {
    const dataItem = await signer({ target: processId, ...message });
    await this.http.post({
      endpoint: `${this.muUrl}/monitor/${processId}`,
      data: dataItem.raw,
      headers: {
        'Content-Type': 'application/octet-stream',
        Accept: 'application/json',
      },
    });
    return dataItem.id;
  }
  async unmonitor({ processId, signer, ...message }) {
    const dataItem = await signer({ target: processId, ...message });
    await this.http.delete({
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
