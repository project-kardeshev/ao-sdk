'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.RemoteSU = void 0;
const http_js_1 = require('../http.js');
class RemoteSU {
  suUrl;
  http;
  constructor({
    suUrl,
    http = new http_js_1.AxiosHTTPService({ url: suUrl }),
  }) {
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
exports.RemoteSU = RemoteSU;
