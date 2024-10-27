import { AxiosHTTPService } from '../http.js';

export class RemoteSU {
  suUrl;
  http;
  constructor({ suUrl, http = new AxiosHTTPService({ url: suUrl }) }) {
    this.suUrl = suUrl;
    this.http = http;
  }
  async getProcessMessages({ processId, from, to, limit }) {
    return this.http.get({
      endpoint: `/${processId}`,
      params: { from, to, limit },
    });
  }
  async getProcessMessage({ processId, messageId, from, to, limit }) {
    return this.http.get({
      endpoint: `/${messageId}`,
      params: { from, to, limit, ['process-id']: processId },
    });
  }
  async getProcess({ processId }) {
    return this.http.get({
      endpoint: `/processes/${processId}`,
    });
  }
}
