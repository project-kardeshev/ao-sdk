import { AoMessage } from './ao.js';

export interface AoMessageCache {
  get(key: string): Promise<Partial<AoMessage>>;
  set(key: string, value: Partial<AoMessage>): Promise<void>;
  del(key: string): Promise<void>;
  clear(): Promise<void>;
}
