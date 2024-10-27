import { CompositeTransport } from './event-transport.js';

export interface IEventVacuum {
  transport: CompositeTransport;
  processLogs: (logData: string, processId: string, nonce: number) => void;
}

export class EventVacuum implements IEventVacuum {
  transport: CompositeTransport;
  constructor(transport: CompositeTransport) {
    this.transport = transport;
  }

  processLogs(logData: string, processId: string, nonce: number) {
    const events = (logData ?? '')
      .split('\n')
      .map(this.parseJson)
      .filter(this.isEvent)
      .map((data) => {
        const eventData = data;
        delete eventData._e;
        return eventData;
      }) // Strip the "_e" flag
      .map(this.normalizeTimestamps);
    this.dispatchEvents(events, processId, nonce);
  }

  parseJson(line: string) {
    try {
      const parsed = JSON.parse(line);
      return typeof parsed === 'object' && parsed !== null ? parsed : null;
    } catch (e) {
      return undefined;
    }
  }

  // Check if the parsed object is a matching event
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isEvent(parsed: any) {
    return parsed && typeof parsed._e === 'number' && parsed._e === 1;
  }

  normalizeTimestamps(event: object) {
    // Normalize timestamp fields to ISO strings
    for (const timestampKey of ['timestamp', 'Timestamp']) {
      if (event[timestampKey]) {
        try {
          const date = new Date(event[timestampKey]);
          event[timestampKey] = date.toISOString();
        } catch (e) {
          delete event[timestampKey];
        }
      }
    }
    return event;
  }

  dispatchEvents(events, processId, nonce) {
    if (events.length === 0) return;
    this.transport.sendEvents(events, processId, nonce);
  }
}
