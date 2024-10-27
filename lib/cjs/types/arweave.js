'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.dataItemSchema = exports.bufferSchema = exports.tagSchema = void 0;
const zod_1 = require('zod');
exports.tagSchema = zod_1.z.object({
  name: zod_1.z.string(),
  value: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
});
exports.bufferSchema = zod_1.z.unknown().refine((val) => Buffer.isBuffer(val), {
  message: 'stream must be a Buffer',
});
exports.dataItemSchema = zod_1.z
  .object({
    tags: zod_1.z.array(exports.tagSchema),
    data: zod_1.z.union([
      zod_1.z.string(),
      zod_1.z.number(),
      exports.bufferSchema,
    ]),
    target: zod_1.z.string().optional(),
    anchor: zod_1.z.string().optional(),
  })
  .passthrough();
