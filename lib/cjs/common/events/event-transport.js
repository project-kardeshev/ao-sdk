'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ConsoleTransport = exports.CompositeTransport = void 0;
const constants_js_1 = require('../constants.js');
class CompositeTransport {
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
exports.CompositeTransport = CompositeTransport;
class ConsoleTransport {
  logger;
  constructor() {
    this.logger = constants_js_1.defaultLogger.child('console-transport');
  }
  sendEvents(events, processId, nonce) {
    this.logger.info(
      `[ProcID: ${processId}; Nonce: ${nonce}]: Vacuumed events:\n%O`,
      events,
    );
  }
}
exports.ConsoleTransport = ConsoleTransport;
