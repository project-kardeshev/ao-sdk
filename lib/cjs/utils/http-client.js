'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.createAxiosInstance = void 0;
const axios_1 = __importDefault(require('axios'));
const axios_retry_1 = __importDefault(require('axios-retry'));
const version_js_1 = require('../version.js');
const logger_js_1 = require('./logger.js');
const createAxiosInstance = ({
  axiosConfig = {},
  logger = logger_js_1.Logger.default,
  retryConfig = {
    retries: 5,
    retryDelay: axios_retry_1.default.exponentialDelay,
    retryCondition: (error) => axios_retry_1.default.isRetryableError(error),
    onRetry(retryCount, error, requestConfig) {
      logger.error(
        `Retrying request ${requestConfig.url} attempt ${retryCount}`,
        error,
      );
    },
  },
} = {}) => {
  const axiosInstance = axios_1.default.create({
    ...axiosConfig,
    maxRedirects: 0,
    headers: {
      ...axiosConfig.headers,
      'x-source-version': `${version_js_1.version}`,
      'x-source-identifier': 'ar-io-sdk',
    },
    validateStatus: () => true, // don't throw on non-200 status codes
  });
  // add retries
  (0, axios_retry_1.default)(axiosInstance, retryConfig);
  return axiosInstance;
};
exports.createAxiosInstance = createAxiosInstance;
