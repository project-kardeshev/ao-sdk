import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [],
  test: {
    testTimeout: 60_000 * 5,
    include: ['./tests/unit/*.test.ts'],
    poolOptions: {
      forks: {
        execArgv: ['--experimental-wasm-memory64'],
      },
    },
  },
});
