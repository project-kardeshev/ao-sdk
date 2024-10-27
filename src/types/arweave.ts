import { z } from 'zod';

export const tagSchema = z.object({
  name: z.string(),
  value: z.union([z.string(), z.number()]),
});

export const bufferSchema = z.unknown().refine((val) => Buffer.isBuffer(val), {
  message: 'stream must be a Buffer',
});

export const dataItemSchema = z
  .object({
    tags: z.array(tagSchema),
    data: z.union([z.string(), z.number(), bufferSchema]),
    target: z.string().optional(),
    anchor: z.string().optional(),
  })
  .passthrough();
