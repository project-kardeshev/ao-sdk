import { DefaultClient } from '../../src/';

describe('DefaultClient', () => {
  it('should create client', () => {
    expect(() => new DefaultClient(-1)).toThrow();
  });
});

