import { AoEvent } from '@/types/events.js';
import { z } from 'zod';

import { AoSigner } from '../types/ao.js';

export function isAoSigner(value: unknown): value is AoSigner {
  const TagSchema = z.object({
    name: z.string(),
    value: z.union([z.string(), z.number()]),
  });

  const AoSignerSchema = z
    .function()
    .args(
      z.object({
        data: z.union([z.string(), z.instanceof(Buffer)]),
        tags: z.array(TagSchema).optional(),
        target: z.string().optional(),
        anchor: z.string().optional(),
      }),
    )
    .returns(
      z.promise(
        z.object({
          id: z.string(),
          raw: z.instanceof(ArrayBuffer),
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

export function isAoEvent(value: unknown): value is AoEvent {
  const AoEventSchema = z
    .object({
      _e: z.number(),
      sampleRate: z.number(),
      timestamp: z.string().optional(),
      Timestamp: z.string().optional(),
    })
    .passthrough();

  try {
    AoEventSchema.parse(value);
    return true;
  } catch {
    return false;
  }
}
