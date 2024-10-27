'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.safeDecode = safeDecode;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function safeDecode(data) {
  try {
    return JSON.parse(data);
  } catch (e) {
    return data;
  }
}
