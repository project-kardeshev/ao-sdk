import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import axiosRetry, { IAxiosRetryConfig } from 'axios-retry';

import { version } from '../version.js';
import { ILogger, Logger } from './logger.js';

export interface AxiosInstanceParameters {
  axiosConfig?: Omit<AxiosRequestConfig, 'validateStatus'>;
  retryConfig?: IAxiosRetryConfig;
  logger?: ILogger;
}

export const createAxiosInstance = ({
  axiosConfig = {},
  logger = Logger.default,
  retryConfig = {
    retries: 5,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: (error) => axiosRetry.isRetryableError(error),
    onRetry(retryCount, error, requestConfig) {
      logger.error(
        `Retrying request ${requestConfig.url} attempt ${retryCount}`,
        error,
      );
    },
  },
}: AxiosInstanceParameters = {}): AxiosInstance => {
  const axiosInstance = axios.create({
    ...axiosConfig,
    maxRedirects: 0,
    headers: {
      ...axiosConfig.headers,
      'x-source-version': `${version}`,
      'x-source-identifier': 'ar-io-sdk',
    },
    validateStatus: () => true, // don't throw on non-200 status codes
  });
  // add retries
  axiosRetry(axiosInstance, retryConfig);
  return axiosInstance;
};
