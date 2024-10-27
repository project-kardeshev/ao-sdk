import { AxiosHTTPService } from '../http.js';

export class RemoteCU {
  cuUrl;
  http;
  constructor({ cuUrl, http = new AxiosHTTPService({ url: cuUrl }) }) {
    this.cuUrl = cuUrl;
    this.http = http;
  }
  async dryrun({ message }, options) {
    const result = await this.http.post({
      endpoint: `${this.cuUrl}/dry-run`,
      params: {
        ['process-id']: message.Target,
        to: options?.messageId,
      },
      data: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // TODO: might be able to return memory with this from remote CU - need timestamp of last message, which could be used to get state, then dry run the message after loading the process
    return { ...result, Memory: undefined };
  }
  async result({ messageId, processId }) {
    const result = await this.http.get({
      endpoint: `${this.cuUrl}/result/${messageId}`,
      params: { ['process-id']: processId },
    });
    return result;
  }
  async state({ processId }, options) {
    const result = await this.http.get({
      endpoint: `${this.cuUrl}/state/${processId}`,
      params: { to: options?.toTimestamp },
    });
    return result;
  }
}
