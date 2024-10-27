import { AoEvent, IEventTransport } from '../../types/events.js';
import { ILogger } from '../../utils/logger.js';
import { defaultLogger } from '../constants.js';

export class CompositeTransport {
  transports: IEventTransport[];
  constructor(transports: IEventTransport[]) {
    this.transports = transports; // An array of transport instances
  }

  sendEvents(events: AoEvent[], processId: string, nonce: number) {
    this.transports.forEach((transport) => {
      transport.sendEvents(events, processId, nonce);
    });
  }
}

export class ConsoleTransport implements IEventTransport {
  logger: ILogger;
  constructor() {
    this.logger = defaultLogger.child('console-transport');
  }

  sendEvents(events: AoEvent[], processId: string, nonce: number) {
    this.logger.info(
      `[ProcID: ${processId}; Nonce: ${nonce}]: Vacuumed events:\n%O`,
      events,
    );
  }
}
