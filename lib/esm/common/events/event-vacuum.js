export class EventVacuum {
  transport;
  constructor(transport) {
    this.transport = transport;
  }
  processLogs(logData, processId, nonce) {
    const events = (logData ?? '')
      .split('\n')
      .map(this.parseJson)
      .filter(this.isEvent)
      .map((data) => {
        const { _e, ...eventData } = data;
        return eventData;
      }) // Strip the "_e" flag
      .map(this.normalizeTimestamps);
    this.dispatchEvents(events, processId, nonce);
  }
  parseJson(line) {
    try {
      const parsed = JSON.parse(line);
      return typeof parsed === 'object' && parsed !== null ? parsed : null;
    } catch (e) {
      return undefined;
    }
  }
  // Check if the parsed object is a matching event
  isEvent(parsed) {
    return parsed && typeof parsed._e === 'number' && parsed._e === 1;
  }
  normalizeTimestamps(event) {
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
