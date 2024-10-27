'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.isAoSigner = isAoSigner;
exports.isAoEvent = isAoEvent;
const zod_1 = require('zod');
function isAoSigner(value) {
  const TagSchema = zod_1.z.object({
    name: zod_1.z.string(),
    value: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
  });
  const AoSignerSchema = zod_1.z
    .function()
    .args(
      zod_1.z.object({
        data: zod_1.z.union([zod_1.z.string(), zod_1.z.instanceof(Buffer)]),
        tags: zod_1.z.array(TagSchema).optional(),
        target: zod_1.z.string().optional(),
        anchor: zod_1.z.string().optional(),
      }),
    )
    .returns(
      zod_1.z.promise(
        zod_1.z.object({
          id: zod_1.z.string(),
          raw: zod_1.z.instanceof(ArrayBuffer),
        }),
      ),
    );
  try {
    AoSignerSchema.parse(value);
    return true;
  } catch {
    return false;
  }
}
function isAoEvent(value) {
  const AoEventSchema = zod_1.z
    .object({
      _e: zod_1.z.number(),
      sampleRate: zod_1.z.number(),
      timestamp: zod_1.z.string().optional(),
      Timestamp: zod_1.z.string().optional(),
    })
    .passthrough();
  try {
    AoEventSchema.parse(value);
    return true;
  } catch {
    return false;
  }
}
