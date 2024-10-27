'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.RemoteMU = void 0;
const http_js_1 = require('../http.js');
class RemoteMU {
  muUrl;
  http;
  constructor({
    muUrl,
    http = new http_js_1.AxiosHTTPService({ url: muUrl }),
  }) {
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
exports.RemoteMU = RemoteMU;
