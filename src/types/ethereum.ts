import { z } from 'zod';

export const ethereumPrivateKeySchema = z
  .string()
  .refine((val) => val.length === 64, {
    message: 'private key must be 64 characters long',
  });

export function isEthereumPrivateKey(value: string) {
  return ethereumPrivateKeySchema.safeParse(value).success;
}
