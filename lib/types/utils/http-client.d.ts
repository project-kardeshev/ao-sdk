import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { IAxiosRetryConfig } from 'axios-retry';

import { ILogger } from './logger.js';

export interface AxiosInstanceParameters {
  axiosConfig?: Omit<AxiosRequestConfig, 'validateStatus'>;
  retryConfig?: IAxiosRetryConfig;
  logger?: ILogger;
}
export declare const createAxiosInstance: ({
  axiosConfig,
  logger,
  retryConfig,
}?: AxiosInstanceParameters) => AxiosInstance;
