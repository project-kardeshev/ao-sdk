import { AoSigner, AoWriteOptions } from '../../../../types/ao.js';
import { findMessageByTag } from '../../../../utils/ao.js';
import { safeDecode } from '../../../../utils/json.js';
import { Process, ProcessReadable, ProcessWritable } from '../../process.js';

export interface KVRegistryReadable {
  getKVStores(
    {
      user,
    }: {
      user: string;
    },
    options?: Omit<AoWriteOptions, 'target'>,
  ): Promise<{ Owned: string[]; Controlled: [] }>;
}

export interface KVRegistryWritable {
  spawnKVStore(
    { name }: { name?: string },
    options?: Omit<AoWriteOptions, 'target'>,
  ): Promise<string>;
}

export class KVRegistryProcessReadable implements KVRegistryReadable {
  readonly process: ProcessReadable;

  constructor({
    process,
    processId,
  }: {
    process?: ProcessReadable;
    processId?: string;
  } = {}) {
    if (!process && !processId) {
      throw new Error('Either process or processId should be provided');
    }
    this.process =
      process ??
      (Process.createRemoteProcess({
        processId: processId!,
      }) as ProcessReadable);
  }

  async getKVStores(
    {
      user,
    }: {
      user: string;
    },
    options?: Omit<AoWriteOptions, 'target'>,
  ): Promise<{ Owned: string[]; Controlled: [] }> {
    const res = await this.process.read({
      data: options?.data,
      tags: [
        {
          name: 'Action',
          value: 'KV-Registry.Get-KV-Stores',
        },
        {
          name: 'Address',
          value: user,
        },
        ...(options?.tags ?? []),
      ],
    });
    const message = findMessageByTag({
      messages: res.Messages,
      name: 'Action',
      value: 'KV-Registry.Get-KV-Stores',
    });
    return message?.Data !== undefined
      ? safeDecode(message.Data)
      : { Owned: [], Controlled: [] };
  }
}

export class KVRegistryProcessWritable
  extends KVRegistryProcessReadable
  implements KVRegistryWritable
{
  readonly process: ProcessWritable;

  constructor({
    signer,
    processId,
    process = Process.createRemoteProcess({
      signer,
      processId,
    }) as ProcessWritable,
  }: {
    signer: AoSigner;
    processId: string;
    process?: ProcessWritable;
  }) {
    super({ process });
    this.process = process;
  }

  async spawnKVStore(
    { name }: { name?: string | undefined },
    options?: AoWriteOptions | undefined,
  ): Promise<string> {
    const res = await this.process.write({
      data: options?.data,
      tags: [
        {
          name: 'Action',
          value: 'KV-Registry.Spawn-KV-Store',
        },
        ...(options?.tags ?? []),
        ...(name
          ? [
              {
                name: 'Name',
                value: name,
              },
            ]
          : []),
      ],
    });
    return res.id;
  }
}
