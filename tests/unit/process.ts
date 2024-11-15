import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, test } from 'vitest';

import { LocalAoProcessFactory } from '../../src/common/process/local.js';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const aosWasmModule = fs.readFileSync(
  path.join(
    __dirname,
    '../fixtures/aos-cbn0KKrBZH7hdNkNokuXLtGryrWM--PjSTBqIzw9Kkk.wasm',
  ),
);

describe('ao_process', async () => {
  const factory = new LocalAoProcessFactory();
  test('should create a process from wasm', async () => {
    const localProcess = factory.create(
      aosWasmModule,
      new WebAssembly.Memory({ initial: 10 }),
    );
    expect(localProcess).toBeDefined();
  });
  test('should create a local process from existing id', async () => {
    const projectKardeshevId = 'wJVTnZTedI9FIY4r2cB9C4CpAJKImvhu0WjOh0AecjQ';

    const localProcess = await factory.fromExisting({
      processId: projectKardeshevId,
    });

    expect(localProcess).toBeDefined();
  });
});
