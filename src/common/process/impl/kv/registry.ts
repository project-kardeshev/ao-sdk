import { AoSigner, AoWriteOptions } from '../../../../types/ao.js';
import { findMessageByTag } from '../../../../utils/ao.js';
import { safeDecode } from '../../../../utils/json.js';
import {
  AoConnectProcess,
  AoConnectProcessReadable,
  AoConnectProcessWritable,
} from '../../aoconnect.js';

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

export class KVRegistryAoConnectProcessReadable implements KVRegistryReadable {
  readonly process: AoConnectProcessReadable;

  constructor({
    process,
    processId,
  }: {
    process?: AoConnectProcessReadable;
    processId?: string;
  } = {}) {
    if (!process && !processId) {
      throw new Error('Either process or processId should be provided');
    }
    this.process =
      process ??
      (AoConnectProcess.createRemoteProcess({
        processId: processId!,
      }) as AoConnectProcessReadable);
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
      value: 'KV-Registry.Get-KV-Stores-Notice',
    });
    return message?.Data !== undefined
      ? safeDecode(message.Data)
      : { Owned: [], Controlled: [] };
  }
}

export class KVRegistryAoConnectProcessWritable
  extends KVRegistryAoConnectProcessReadable
  implements KVRegistryWritable
{
  readonly process: AoConnectProcessWritable;

  constructor({
    signer,
    processId,
    process = AoConnectProcess.createRemoteProcess({
      signer,
      processId,
    }) as AoConnectProcessWritable,
  }: {
    signer: AoSigner;
    processId: string;
    process?: AoConnectProcessWritable;
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
                name: 'KV-Store-Name',
                value: name,
              },
            ]
          : []),
      ],
    });
    return res.id;
  }
}
