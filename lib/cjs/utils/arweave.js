'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.validateArweaveId = void 0;
const constants_js_1 = require('../common/constants.js');
const validateArweaveId = (id) => {
  return constants_js_1.ARWEAVE_TX_REGEX.test(id);
};
exports.validateArweaveId = validateArweaveId;
