import AoLoader, { BinaryFormat } from '@permaweb/ao-loader';
import Arweave from 'arweave';
import { TransactionInterface } from 'arweave/node/lib/transaction.js';

import { AoCU, AoResult } from '../../types/ao.js';
import { RemoteCU } from '../index.js';

export const STUB_PROCESS_ID = 'process-id-'.padEnd(43, '1');
export const STUB_ADDRESS = 'arweave-address-'.padEnd(43, '1');
/* ao READ-ONLY Env Variables */
export const AO_LOADER_HANDLER_ENV = {
  Process: {
    Id: STUB_PROCESS_ID,
    Owner: STUB_ADDRESS,
    Tags: [
      { name: 'Authority', value: 'XXXXXX' },
      { name: 'ANT-Registry-Id', value: 'ant-registry-'.padEnd(43, '1') },
    ],
  },
  Module: {
    Id: ''.padEnd(43, '1'),
    Tags: [{ name: 'Authority', value: 'YYYYYY' }],
  },
};

export const AO_LOADER_OPTIONS = {
  format: 'wasm64-unknown-emscripten-draft_2024_02_15' as BinaryFormat,
  inputEncoding: 'JSON-1',
  outputEncoding: 'JSON-1',
  memoryLimit: '524288000', // in bytes
  computeLimit: 9e12,
  extensions: [],
};

export function loadOptionsFromTransaction(tx: TransactionInterface) {
  return {
    format: tx.tags.find((tag) => tag.name === 'Module-Format')
      ?.value as BinaryFormat,
    inputEncoding: tx.tags.find((tag) => tag.name === 'Input-Encoding')?.value,
    outputEncoding: tx.tags.find((tag) => tag.name === 'Output-Encoding')
      ?.value,
    memoryLimit: String(
      tx.tags.find((tag) => tag.name === 'Memory-Limit')?.value,
    ),
    computeLimit: Number(
      tx.tags.find((tag) => tag.name === 'Compute-Limit')?.value,
    ),
  };
}

export function dataItemTagsFromLoadOptions(options: typeof AO_LOADER_OPTIONS) {
  return [
    { name: 'Module-Format', value: options.format },
    { name: 'Input-Encoding', value: options.inputEncoding },
    { name: 'Output-Encoding', value: options.outputEncoding },
    { name: 'Memory-Limit', value: options.memoryLimit },
    { name: 'Compute-Limit', value: String(options.computeLimit) },
  ];
}

export const DEFAULT_HANDLE_OPTIONS = {
  Id: ''.padEnd(43, '1'),
  ['Block-Height']: '1',
  // important to set the address so that that `Authority` check passes. Else the `isTrusted` with throw an error.
  Owner: STUB_ADDRESS,
  Module: 'ANT',
  Target: ''.padEnd(43, '1'),
  From: STUB_ADDRESS,
  Timestamp: Date.now(),
  Cron: false,
};

export type InteractionArguments = {
  Signature: string | undefined;
  Owner: string;
  Target: string;
  Anchor: string | undefined;
  Tags: { name: string; value: string }[];
  Data: any;
  From: string;
  Timestamp: string;
  ['Block-Height']: string;
  Epoch: string | undefined;
  Nonce: string | undefined;
};

export interface LocalProcess {
  // will perform action and return result without modifying state
  read(
    args: InteractionArguments,
  ): Promise<AoResult & { Memory: WebAssembly.Memory }>;
  // will perform action and return result after modifying state
  send(
    args: InteractionArguments,
  ): Promise<AoResult & { Memory: WebAssembly.Memory }>;
  reset(): void;
}

export class LocalAoProcess implements LocalProcess {
  private startMemory: WebAssembly.Memory;
  private memory: WebAssembly.Memory;
  private wasmModule: Uint8Array;
  private handle: Awaited<ReturnType<typeof AoLoader>>;
  readonly defaultHandleOptions: typeof DEFAULT_HANDLE_OPTIONS;
  readonly defaultAoEnv: typeof AO_LOADER_HANDLER_ENV;
  readonly aoLoaderOptions: typeof AO_LOADER_OPTIONS;

  constructor({
    memory,
    handle,
    wasmModule,
    aoLoaderOptions,
    defaultHandleOptions = DEFAULT_HANDLE_OPTIONS,
    defaultAoEnv = AO_LOADER_HANDLER_ENV,
  }: {
    memory: WebAssembly.Memory;
    handle: Awaited<ReturnType<typeof AoLoader>>;
    wasmModule: Uint8Array;
    aoLoaderOptions: typeof AO_LOADER_OPTIONS;
    defaultHandleOptions?: typeof DEFAULT_HANDLE_OPTIONS;
    defaultAoEnv?: typeof AO_LOADER_HANDLER_ENV;
  }) {
    this.startMemory = memory;
    this.memory = memory;
    this.handle = handle;
    this.wasmModule = wasmModule;
    this.aoLoaderOptions = aoLoaderOptions;
    this.defaultHandleOptions = defaultHandleOptions;
    this.defaultAoEnv = defaultAoEnv;
  }

  clone() {
    return new LocalAoProcess({
      memory: this.memory,
      handle: this.handle,
      wasmModule: this.wasmModule,
      defaultHandleOptions: this.defaultHandleOptions,
      defaultAoEnv: this.defaultAoEnv,
      aoLoaderOptions: this.aoLoaderOptions,
    });
  }

  reset() {
    this.memory = this.startMemory;
  }

  private async eval(
    args: InteractionArguments,
    memory: WebAssembly.Memory = this.memory,
  ) {
    return await this.handle(
      memory as any,
      {
        ...this.defaultHandleOptions,
        ...args,
      },
      this.defaultAoEnv,
    );
  }

  async read(args: InteractionArguments) {
    return (await this.eval(args, this.memory)) as any as AoResult & {
      Memory: WebAssembly.Memory;
    };
  }
  async send(args: InteractionArguments) {
    const res = await this.eval(args, this.memory);
    this.memory = res.Memory as any;
    return res as any as AoResult & { Memory: WebAssembly.Memory };
  }
}

export class LocalAoProcessFactory {
  private cu: AoCU;
  private ar: Arweave;
  constructor({
    cu = new RemoteCU({ cuUrl: 'https://cu.ao-testnet.xyz' }),
    arweave = Arweave.init({
      host: 'arweave.net',
      port: 443,
      protocol: 'https',
    }),
  }: {
    cu?: AoCU;
    arweave?: Arweave;
  } = {}) {
    this.cu = cu;
    this.ar = arweave;
  }

  async create(
    moduleWasm: Buffer,
    memory: WebAssembly.Memory,
    loaderOptions: Partial<typeof AO_LOADER_OPTIONS> = {},
  ) {
    const handle = await AoLoader(moduleWasm, {
      ...AO_LOADER_OPTIONS,
      ...loaderOptions,
    });
    return new LocalAoProcess({
      memory,
      handle,
      wasmModule: moduleWasm,
      aoLoaderOptions: {
        ...AO_LOADER_OPTIONS,
        ...loaderOptions,
      },
    });
  }

  /**
   * @param processId - the processId of the process to be loaded
   * @param toTimestamp - the timestamp to load the process state to. If none provided the current state will be loaded.
   * @example
   * ```ts
   * const factory = new LocalAoProcessFactory();
   * const processId = 'process-id-'.padEnd(43, '1');
   * const process = await factory.fromExisting({ processId });
   * ```
   */
  async fromExisting({
    processId,
    toTimestamp,
  }: {
    processId: string;
    toTimestamp?: number;
  }) {
    const processTx = await this.ar.transactions.get(processId);
    const moduleId = processTx.tags.find((tag) => tag.name === 'Module')?.value;
    if (!moduleId) {
      throw new Error('Module ID not found in process transaction tags');
    }
    const moduleWasm = await this.ar.transactions.getData(moduleId);
    const moduleTx = await this.ar.transactions.get(moduleId);
    const aoLoaderOptions = loadOptionsFromTransaction(moduleTx);
    const mem = await this.cu.state({ processId }, { toTimestamp });

    return this.create(moduleWasm as any, mem, aoLoaderOptions);
  }
}
