'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.AxiosHTTPService = void 0;
const http_client_js_1 = require('../../utils/http-client.js');
const logger_js_1 = require('../../utils/logger.js');
const errors_js_1 = require('../errors.js');
class AxiosHTTPService {
  axios;
  logger;
  constructor({ url, logger = logger_js_1.Logger.default }) {
    this.logger = logger;
    this.axios = (0, http_client_js_1.createAxiosInstance)({
      axiosConfig: {
        baseURL: url,
      },
      logger: this.logger,
    });
  }
  async get({
    endpoint,
    signal,
    allowedStatuses = [200, 202],
    headers,
    params,
  }) {
    this.logger.debug(
      `Get request to endpoint: ${endpoint} with params ${JSON.stringify(params, undefined, 2)}`,
    );
    const { status, statusText, data } = await this.axios.get(endpoint, {
      headers,
      signal,
      params,
    });
    this.logger.debug(`Response status: ${status} ${statusText}`);
    if (!allowedStatuses.includes(status)) {
      switch (status) {
        case 404:
          throw new errors_js_1.NotFound(statusText);
        case 400:
        case 500:
        case 502:
        case 503:
          throw new errors_js_1.FailedRequestError(status, statusText);
        default:
          throw new errors_js_1.UnknownError(statusText);
      }
    }
    return data;
  }
  async post({
    endpoint,
    signal,
    allowedStatuses = [200, 202],
    headers,
    params,
    data,
  }) {
    this.logger.debug(
      `Post request to endpoint: ${endpoint} with data ${JSON.stringify(data, undefined, 2)}`,
    );
    const {
      status,
      statusText,
      data: responseData,
    } = await this.axios.post(endpoint, data, {
      headers,
      params,
      signal,
    });
    this.logger.debug(`Response status: ${status} ${statusText}`);
    if (!allowedStatuses.includes(status)) {
      switch (status) {
        case 404:
          throw new errors_js_1.NotFound(statusText);
        case 400:
        case 500:
        case 502:
        case 503:
          throw new errors_js_1.FailedRequestError(status, statusText);
        default:
          throw new errors_js_1.UnknownError(statusText);
      }
    }
    return responseData;
  }
  async put({ endpoint, signal, allowedStatuses = [200, 202], headers, data }) {
    this.logger.debug(
      `Put request to endpoint: ${endpoint} with data ${JSON.stringify(data, undefined, 2)}`,
    );
    const {
      status,
      statusText,
      data: responseData,
    } = await this.axios.put(endpoint, data, {
      headers,
      signal,
    });
    this.logger.debug(`Response status: ${status} ${statusText}`);
    if (!allowedStatuses.includes(status)) {
      switch (status) {
        case 404:
          throw new errors_js_1.NotFound(statusText);
        case 400:
        case 500:
        case 502:
        case 503:
          throw new errors_js_1.FailedRequestError(status, statusText);
        default:
          throw new errors_js_1.UnknownError(statusText);
      }
    }
    return responseData;
  }
  async delete({
    endpoint,
    signal,
    allowedStatuses = [200, 202],
    headers,
    data,
  }) {
    this.logger.debug(
      `Delete request to endpoint: ${endpoint} with data ${JSON.stringify(data, undefined, 2)}`,
    );
    const {
      status,
      statusText,
      data: responseData,
    } = await this.axios.delete(endpoint, {
      headers,
      signal,
      data,
    });
    this.logger.debug(`Response status: ${status} ${statusText}`);
    if (!allowedStatuses.includes(status)) {
      switch (status) {
        case 404:
          throw new errors_js_1.NotFound(statusText);
        case 400:
        case 500:
        case 502:
        case 503:
          throw new errors_js_1.FailedRequestError(status, statusText);
        default:
          throw new errors_js_1.UnknownError(statusText);
      }
    }
    return responseData;
  }
  async head({ endpoint, signal, headers, allowedStatuses, data }) {
    this.logger.debug(
      `Head request to endpoint: ${endpoint} with data ${JSON.stringify(data, undefined, 2)}`,
    );
    const {
      status,
      statusText,
      data: responseData,
    } = await this.axios.head(endpoint, { headers, signal, data });
    this.logger.debug(`Response status: ${status} ${statusText}`);
    if (!allowedStatuses?.includes(status)) {
      switch (status) {
        case 404:
          throw new errors_js_1.NotFound(statusText);
        case 400:
        case 500:
        case 502:
        case 503:
          throw new errors_js_1.FailedRequestError(status, statusText);
        default:
          throw new errors_js_1.UnknownError(statusText);
      }
    }
    return responseData;
  }
}
exports.AxiosHTTPService = AxiosHTTPService;
