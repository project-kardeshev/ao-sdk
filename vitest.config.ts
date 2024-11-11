import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [],
  test: {
    include: ['./tests/unit/*.test.ts'],
    poolOptions: {
      forks: {
        execArgv: ['--experimental-wasm-memory64'],
      },
    },
  },
});
