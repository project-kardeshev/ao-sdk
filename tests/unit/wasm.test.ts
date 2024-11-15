import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, test } from 'vitest';

import { RemoteCU } from '../../src/common/services/cu/remote-cu';
import { buildWasmModuleWithInjectedMemory } from '../../src/utils/ao';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const aosWasmModule = fs.readFileSync(
  path.join(
    __dirname,
    '../fixtures/aos-32-LmeGdN1-8PsxJFq5M41jHFvB5lotHSsLKiIkj5uitss.wasm',
  ),
);

describe('wasm manipulation', async () => {
  const processId = 'i5OSRRkldhe0hXfcQdDUWK0ZXLesC-Q-QLmLZmaTBxU';
  const cu = new RemoteCU({ cuUrl: 'https://cu83.ao-testnet.xyz' });
  test('should create a new wasm binary from existing memory', async () => {
    const memory = await cu.state({ processId });
    const newBinary = await buildWasmModuleWithInjectedMemory({
      wasmBinary: aosWasmModule,
      memory,
    });
    console.log(newBinary);
    expect(newBinary).toBeDefined();
  });
});
