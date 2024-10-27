import { defaultLogger } from '../constants.js';

export class CompositeTransport {
  transports;
  constructor(transports) {
    this.transports = transports; // An array of transport instances
  }
  sendEvents(events, processId, nonce) {
    this.transports.forEach((transport) => {
      transport.sendEvents(events, processId, nonce);
    });
  }
}
export class ConsoleTransport {
  logger;
  constructor() {
    this.logger = defaultLogger.child('console-transport');
  }
  sendEvents(events, processId, nonce) {
    this.logger.info(
      `[ProcID: ${processId}; Nonce: ${nonce}]: Vacuumed events:\n%O`,
      events,
    );
  }
}
