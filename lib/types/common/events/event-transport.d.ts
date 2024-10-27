import { AoEvent, IEventTransport } from '../../types/events.js';
import { ILogger } from '../../utils/logger.js';

export declare class CompositeTransport {
  transports: IEventTransport[];
  constructor(transports: IEventTransport[]);
  sendEvents(events: AoEvent[], processId: string, nonce: number): void;
}
export declare class ConsoleTransport implements IEventTransport {
  logger: ILogger;
  constructor();
  sendEvents(events: AoEvent[], processId: string, nonce: number): void;
}
