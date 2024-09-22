import { AoMessage } from './ao.js';

export interface AoMessageCache {
  get(key: string): Promise<AoMessage>;
  set(key: string, value: AoMessage): Promise<void>;
  del(key: string): Promise<void>;
  clear(): Promise<void>;
}
