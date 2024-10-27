import { AxiosInstance } from 'axios';

import { HTTPClient } from '../../types/http.js';
import { createAxiosInstance } from '../../utils/http-client.js';
import { ILogger, Logger } from '../../utils/logger.js';
import { FailedRequestError, NotFound, UnknownError } from '../errors.js';

export class AxiosHTTPService implements HTTPClient {
  private axios: AxiosInstance;
  private logger: ILogger;

  constructor({
    url,
    logger = Logger.default,
  }: {
    url: string;
    logger?: ILogger;
  }) {
    this.logger = logger;
    this.axios = createAxiosInstance({
      axiosConfig: {
        baseURL: url,
      },
      logger: this.logger,
    });
  }
  async get<I, K>({
    endpoint,
    signal,
    allowedStatuses = [200, 202],
    headers,
    params,
  }: {
    endpoint: string;
    signal?: AbortSignal;
    allowedStatuses?: number[];
    headers?: Record<string, string>;
    params?: I;
  }): Promise<K> {
    this.logger.debug(
      `Get request to endpoint: ${endpoint} with params ${JSON.stringify(
        params,
        undefined,
        2,
      )}`,
    );
    const { status, statusText, data } = await this.axios.get<K>(endpoint, {
      headers,
      signal,
      params,
    });
    this.logger.debug(`Response status: ${status} ${statusText}`);

    if (!allowedStatuses.includes(status)) {
      switch (status) {
        case 404:
          throw new NotFound(statusText);
        case 400:
        case 500:
        case 502:
        case 503:
          throw new FailedRequestError(status, statusText);
        default:
          throw new UnknownError(statusText);
      }
    }

    return data;
  }

  async post<I, K>({
    endpoint,
    signal,
    allowedStatuses = [200, 202],
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
  }): Promise<K> {
    this.logger.debug(
      `Post request to endpoint: ${endpoint} with data ${JSON.stringify(
        data,
        undefined,
        2,
      )}`,
    );
    const {
      status,
      statusText,
      data: responseData,
    } = await this.axios.post<K>(endpoint, data, {
      headers,
      params,
      signal,
    });
    this.logger.debug(`Response status: ${status} ${statusText}`);

    if (!allowedStatuses.includes(status)) {
      switch (status) {
        case 404:
          throw new NotFound(statusText);
        case 400:
        case 500:
        case 502:
        case 503:
          throw new FailedRequestError(status, statusText);
        default:
          throw new UnknownError(statusText);
      }
    }

    return responseData;
  }

  async put<I, K>({
    endpoint,
    signal,
    allowedStatuses = [200, 202],
    headers,
    data,
  }: {
    endpoint: string;
    signal?: AbortSignal;
    allowedStatuses?: number[];
    headers?: Record<string, string>;
    data?: I;
  }): Promise<K> {
    this.logger.debug(
      `Put request to endpoint: ${endpoint} with data ${JSON.stringify(
        data,
        undefined,
        2,
      )}`,
    );
    const {
      status,
      statusText,
      data: responseData,
    } = await this.axios.put<K>(endpoint, data, {
      headers,
      signal,
    });
    this.logger.debug(`Response status: ${status} ${statusText}`);

    if (!allowedStatuses.includes(status)) {
      switch (status) {
        case 404:
          throw new NotFound(statusText);
        case 400:
        case 500:
        case 502:
        case 503:
          throw new FailedRequestError(status, statusText);
        default:
          throw new UnknownError(statusText);
      }
    }

    return responseData;
  }

  async delete<I, K>({
    endpoint,
    signal,
    allowedStatuses = [200, 202],
    headers,
    data,
  }: {
    endpoint: string;
    signal?: AbortSignal;
    allowedStatuses?: number[];
    headers?: Record<string, string>;
    data?: I;
  }): Promise<K> {
    this.logger.debug(
      `Delete request to endpoint: ${endpoint} with data ${JSON.stringify(
        data,
        undefined,
        2,
      )}`,
    );
    const {
      status,
      statusText,
      data: responseData,
    } = await this.axios.delete<K>(endpoint, {
      headers,
      signal,
      data,
    });
    this.logger.debug(`Response status: ${status} ${statusText}`);

    if (!allowedStatuses.includes(status)) {
      switch (status) {
        case 404:
          throw new NotFound(statusText);
        case 400:
        case 500:
        case 502:
        case 503:
          throw new FailedRequestError(status, statusText);
        default:
          throw new UnknownError(statusText);
      }
    }

    return responseData;
  }

  async head<I, K>({
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
  }): Promise<K> {
    this.logger.debug(
      `Head request to endpoint: ${endpoint} with data ${JSON.stringify(
        data,
        undefined,
        2,
      )}`,
    );
    const {
      status,
      statusText,
      data: responseData,
    } = await this.axios.head<K>(endpoint, { headers, signal, data });
    this.logger.debug(`Response status: ${status} ${statusText}`);
    if (!allowedStatuses?.includes(status)) {
      switch (status) {
        case 404:
          throw new NotFound(statusText);
        case 400:
        case 500:
        case 502:
        case 503:
          throw new FailedRequestError(status, statusText);
        default:
          throw new UnknownError(statusText);
      }
    }
    return responseData;
  }
}
