'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.isWritableProcessConfig = isWritableProcessConfig;
function isWritableProcessConfig(config) {
  return config.signer !== undefined;
}
