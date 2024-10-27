import { CompositeTransport } from './event-transport.js';

export interface IEventVacuum {
  transport: CompositeTransport;
  processLogs: (logData: string, processId: string, nonce: number) => void;
}
export declare class EventVacuum implements IEventVacuum {
  transport: CompositeTransport;
  constructor(transport: CompositeTransport);
  processLogs(logData: string, processId: string, nonce: number): void;
  parseJson(line: string): any;
  isEvent(parsed: any): any;
  normalizeTimestamps(event: object): object;
  dispatchEvents(events: any, processId: any, nonce: any): void;
}
