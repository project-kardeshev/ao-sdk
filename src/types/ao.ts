import { DataItem } from '@dha-team/arbundles';

export type AoMessage = {};

export type AoResult = {};

export interface AoProcess {
  memory: WebAssembly.Memory;
  txCache: Map<string, DataItem>;
}

export interface AoCU {
  dryrun(p: { message: AoMessage }): Promise<AoResult>;
}

export type AoSigner = (args: {
  data: string | Buffer;
  tags?: { name: string; value: string }[];
  target?: string;
  anchor?: string;
}) => Promise<{ id: string; raw: ArrayBuffer }>;
