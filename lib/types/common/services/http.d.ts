import { HTTPClient } from '../../types/http.js';
import { ILogger } from '../../utils/logger.js';

export declare class AxiosHTTPService implements HTTPClient {
  private axios;
  private logger;
  constructor({ url, logger }: { url: string; logger?: ILogger });
  get<I, K>({
    endpoint,
    signal,
    allowedStatuses,
    headers,
    params,
  }: {
    endpoint: string;
    signal?: AbortSignal;
    allowedStatuses?: number[];
    headers?: Record<string, string>;
    params?: I;
  }): Promise<K>;
  post<I, K>({
    endpoint,
    signal,
    allowedStatuses,
    headers,
    params,
    data,
  }: {
    endpoint: string;
    signal?: AbortSignal;
    allowedStatuses?: number[];
    headers?: Record<string, string>;
    params?: I;
    data?: I;
  }): Promise<K>;
  put<I, K>({
    endpoint,
    signal,
    allowedStatuses,
    headers,
    data,
  }: {
    endpoint: string;
    signal?: AbortSignal;
    allowedStatuses?: number[];
    headers?: Record<string, string>;
    data?: I;
  }): Promise<K>;
  delete<I, K>({
    endpoint,
    signal,
    allowedStatuses,
    headers,
    data,
  }: {
    endpoint: string;
    signal?: AbortSignal;
    allowedStatuses?: number[];
    headers?: Record<string, string>;
    data?: I;
  }): Promise<K>;
  head<I, K>({
    endpoint,
    signal,
    headers,
    allowedStatuses,
    data,
  }: {
    endpoint: string;
    signal?: AbortSignal | undefined;
    headers?: Record<string, string> | undefined;
    allowedStatuses?: number[] | undefined;
    data?: object | I | undefined;
  }): Promise<K>;
}
