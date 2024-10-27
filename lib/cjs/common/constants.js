'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.DEFAULT_SCHEDULER_ID =
  exports.FQDN_REGEX =
  exports.ARWEAVE_TX_REGEX =
  exports.defaultAoEventVacuum =
  exports.defaultAo =
  exports.defaultLogger =
    void 0;
const aoconnect_1 = require('@permaweb/aoconnect');
const logger_js_1 = require('../utils/logger.js');
const event_transport_js_1 = require('./events/event-transport.js');
const event_vacuum_js_1 = require('./events/event-vacuum.js');
exports.defaultLogger = logger_js_1.Logger.default;
exports.defaultAo = (0, aoconnect_1.connect)({
  GATEWAY_URL: 'https://arweave.net',
});
exports.defaultAoEventVacuum = new event_vacuum_js_1.EventVacuum(
  new event_transport_js_1.CompositeTransport([
    new event_transport_js_1.ConsoleTransport(),
  ]),
);
exports.ARWEAVE_TX_REGEX = new RegExp('^[a-zA-Z0-9_-]{43}$');
/** FQDN regex that matches the one used in the ArNS contract. */
exports.FQDN_REGEX = new RegExp(
  '^(?:(?!-)[A-Za-z0-9-]{1,63}(?<!-)\\.)+[A-Za-z]{1,63}$',
);
exports.DEFAULT_SCHEDULER_ID = '_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA';
