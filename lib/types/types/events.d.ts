import { ILogger } from '../utils/logger.js';

export type AoEvent = {
  _e: number;
  sampleRate: number;
  [key: string]: any;
};
export interface IEventTransport {
  logger: ILogger;
  sendEvents: (events: AoEvent[], processId: string, nonce: number) => void;
}
