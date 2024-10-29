import { JWKInterface } from '@dha-team/arbundles';
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

export const jwkInterfaceSchema = z
  .object({
    kty: z.string(),
    e: z.string(),
    n: z.string(),
  })
  .passthrough();

export function isJwkInterface(value: unknown): value is JWKInterface {
  return jwkInterfaceSchema.safeParse(value).success;
}

export function isArweaveWalletApi(
  arweaveWallet: unknown,
): arweaveWallet is Window['arweaveWallet'] {
  try {
    // eslint-disable-next-line
    const keys = (window?.arweaveWallet as any)
      ? Object.keys(window.arweaveWallet)
      : ['signDataItem', 'connect'];

    return keys.every((key) =>
      Object.keys(arweaveWallet as object).includes(key),
    );
  } catch {
    return false;
  }
}
