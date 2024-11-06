import { AoSigner, AoWriteOptions } from '../../../../types/ao.js';
import { findMessageByTag } from '../../../../utils/ao.js';
import { safeDecode } from '../../../../utils/json.js';
import {
  AoConnectProcess,
  AoConnectProcessReadable,
  AoConnectProcessWritable,
} from '../../aoconnect.js';

export interface KVStoreReadable {
  getInfo(options?: Omit<AoWriteOptions, 'target'>): Promise<{
    State: Record<string, any>;
    Name: string;
    Owner: string;
    Controllers: string[];
    Subscribers: string[];
  }>;
  getValue<T>(
    { path }: { path: string },
    options?: Omit<AoWriteOptions, 'target'>,
  ): Promise<T>;

  getAuthorizationRequests(
    options?: Omit<AoWriteOptions, 'target'>,
  ): Promise<Record<string, boolean | string[]>>;

  accessControlList(options?: Omit<AoWriteOptions, 'target'>): Promise<{
    users: Record<string, Record<string, boolean>>;
    roles: Record<string, string[] | boolean>;
    authorizationRequests: Record<
      string,
      {
        role: string;
        permissions: Record<string, boolean | string[]>;
      }
    >;
  }>;
}

export interface KVStoreWritable {
  setValue(
    {
      path,
      value,
    }: {
      path: string;
      value: string | number | boolean;
    },
    options?: Omit<AoWriteOptions, 'target' | 'data'>,
  ): Promise<string>;
  setControllers(
    { controllers }: { controllers: string[] },
    options?: Omit<AoWriteOptions, 'target' | 'data'>,
  ): Promise<string>;
  setSubscribers(
    { subscribers }: { subscribers: string[] },
    options?: Omit<AoWriteOptions, 'target' | 'data'>,
  ): Promise<string>;
  authorize(
    {
      user,
      permissions,
    }: {
      user: string;
      permissions: Record<string, boolean | string[]>;
    },
    options?: Omit<AoWriteOptions, 'target'>,
  ): Promise<string>;
  requestAuthorization(
    {
      path,
      permissions,
    }: {
      path: string;
      permissions: Record<string, boolean | string[]>;
    },
    options?: Omit<AoWriteOptions, 'target'>,
  ): Promise<string>;
}

export class KVStoreAoConnectProcessReadable implements KVStoreReadable {
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

  async getInfo(options?: Omit<AoWriteOptions, 'target'>): Promise<{
    State: Record<string, any>;
    Name: string;
    Owner: string;
    Controllers: string[];
    Subscribers: string[];
  }> {
    const res = await this.process.read({
      data: options?.data,
      tags: [
        {
          name: 'Action',
          value: 'Info',
        },
        ...(options?.tags ?? []),
      ],
    });
    this.process.logger.info('KVStoreAoConnectProcessReadable getInfo', res);

    const message = res.Messages[0];
    const state = safeDecode(message.Data) as Record<string, any>;
    return {
      State: state ?? {},
      Name: message.Tags?.find((tag) => tag.name === 'Name')?.value ?? '',
      Owner: message.Tags?.find((tag) => tag.name === 'Owner')?.value ?? '',
      Controllers: (message.Tags?.find((tag) => tag.name === 'Controllers')
        ?.value ?? []) as string[],
      Subscribers: (message.Tags?.find((tag) => tag.name === 'Subscribers')
        ?.value ?? []) as string[],
    };
  }

  async getValue<T>(
    { path }: { path: string },
    options?: Omit<AoWriteOptions, 'target'>,
  ): Promise<T> {
    const res = await this.process.read({
      data: options?.data,
      tags: [
        {
          name: 'Action',
          value: 'KV-Store.Get',
        },
        {
          name: 'Path',
          value: path,
        },
        ...(options?.tags ?? []),
      ],
    });

    const message = findMessageByTag({
      messages: res.Messages,
      name: 'Action',
      value: 'KV-Store.Get-Notice',
    })!;
    return safeDecode(message.Data) as T;
  }

  async getAuthorizationRequests(
    options?: Omit<AoWriteOptions, 'target'>,
  ): Promise<Record<string, boolean | string[]>> {
    const res = await this.process.read({
      data: options?.data,
      tags: [
        {
          name: 'Action',
          value: 'KV-Store.Get-Authorization-Requests',
        },
      ],
    });
    const message = findMessageByTag({
      messages: res.Messages,
      name: 'Action',
      value: 'KV-Store.Get-Authorization-Requests-Notice',
    })!;
    return safeDecode(message.Data) ?? {};
  }

  async accessControlList(options?: Omit<AoWriteOptions, 'target'>): Promise<{
    users: Record<string, Record<string, boolean>>;
    roles: Record<string, string[] | boolean>;
    authorizationRequests: Record<
      string,
      {
        role: string;
        permissions: Record<string, boolean | string[]>;
      }
    >;
  }> {
    const res = await this.process.read({
      data: options?.data,
      tags: [
        {
          name: 'Action',
          value: 'KV-Store.Access-Control-List',
        },
        ...(options?.tags ?? []),
      ],
    });

    const message = findMessageByTag({
      messages: res.Messages,
      name: 'Action',
      value: 'KV-Store.Access-Control-List-Notice',
    })!;

    return safeDecode(message.Data) ?? {};
  }
}

export class KVStoreAoConnectProcessWritable
  extends KVStoreAoConnectProcessReadable
  implements KVStoreWritable
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

  async setValue(
    {
      path,
      value,
    }: {
      path: string;
      value: string | number | boolean | object;
    },
    options?: Omit<AoWriteOptions, 'target' | 'data'>,
  ): Promise<string> {
    const res = await this.process.write({
      data: JSON.stringify(value),
      tags: [
        {
          name: 'Action',
          value: 'KV-Store.Set',
        },
        {
          name: 'Path',
          value: path,
        },
        ...(options?.tags ?? []),
      ],
    });
    return res.id;
  }
  async setControllers(
    {
      controllers,
    }: {
      controllers: string[];
    },
    options?: Omit<AoWriteOptions, 'target' | 'data'>,
  ): Promise<string> {
    const res = await this.process.write({
      data: JSON.stringify(controllers),
      tags: [
        {
          name: 'Action',
          value: 'KV-Store.Set-Controllers',
        },
        ...(options?.tags ?? []),
      ],
    });
    return res.id;
  }
  async setSubscribers(
    {
      subscribers,
    }: {
      subscribers: string[];
    },
    options?: Omit<AoWriteOptions, 'target' | 'data'>,
  ): Promise<string> {
    const res = await this.process.write({
      data: JSON.stringify(subscribers),
      tags: [
        {
          name: 'Action',
          value: 'KV-Store.Set-Subscribers',
        },
        ...(options?.tags ?? []),
      ],
    });
    return res.id;
  }

  async authorize(
    {
      user,
      permissions,
    }: {
      user: string;
      permissions: Record<string, boolean | string[]>;
    },
    options?: Omit<AoWriteOptions, 'target'>,
  ): Promise<string> {
    const res = await this.process.write({
      data: options?.data,
      tags: [
        {
          name: 'Action',
          value: 'KV-Store.Authorize',
        },
        {
          name: 'User',
          value: user,
        },
        {
          name: 'Permissions',
          value: JSON.stringify(permissions),
        },
        ...(options?.tags ?? []),
      ],
    });
    return res.id;
  }

  async requestAuthorization(
    {
      path,
      permissions,
    }: {
      path: string;
      permissions: Record<string, boolean | string[]>;
    },
    options?: Omit<AoWriteOptions, 'target'>,
  ): Promise<string> {
    const res = await this.process.write({
      data: options?.data,
      tags: [
        {
          name: 'Action',
          value: 'KV-Store.Request-Authorization',
        },
        {
          name: 'Path',
          value: path,
        },
        {
          name: 'Permissions',
          value: JSON.stringify(permissions),
        },
        ...(options?.tags ?? []),
      ],
    });
    return res.id;
  }
}
