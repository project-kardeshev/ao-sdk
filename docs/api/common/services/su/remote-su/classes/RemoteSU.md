[ao-sdk](../../../../../modules.md) / [common/services/su/remote-su](../index.md) / RemoteSU

# Class: RemoteSU

## Implements

- [`AoSU`](../../../../../types/ao/interfaces/AoSU.md)

## Constructors

### new RemoteSU()

> **new RemoteSU**(`__namedParameters`): [`RemoteSU`](RemoteSU.md)

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.http?**: [`HTTPClient`](../../../../../types/http/interfaces/HTTPClient.md) = `...`

• **\_\_namedParameters.suUrl**: `string`

#### Returns

[`RemoteSU`](RemoteSU.md)

#### Defined in

[src/common/services/su/remote-su.ts:13](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/su/remote-su.ts#L13)

## Properties

### suUrl

> `readonly` **suUrl**: `string`

#### Defined in

[src/common/services/su/remote-su.ts:11](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/su/remote-su.ts#L11)

## Methods

### getProcess()

> **getProcess**(`__namedParameters`): `Promise`\<`Partial`\<`Pick`\<`DataItem`, `"tags"` \| `"data"` \| `"anchor"`\>\>\>

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.processId**: `string`

#### Returns

`Promise`\<`Partial`\<`Pick`\<`DataItem`, `"tags"` \| `"data"` \| `"anchor"`\>\>\>

#### Implementation of

[`AoSU`](../../../../../types/ao/interfaces/AoSU.md).[`getProcess`](../../../../../types/ao/interfaces/AoSU.md#getprocess)

#### Defined in

[src/common/services/su/remote-su.ts:58](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/su/remote-su.ts#L58)

***

### getProcessMessage()

> **getProcessMessage**(`__namedParameters`): `Promise`\<[`AoSUMessageNode`](../../../../../types/ao/type-aliases/AoSUMessageNode.md)\>

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.from?**: `string`

• **\_\_namedParameters.limit?**: `number`

• **\_\_namedParameters.messageId**: `string`

• **\_\_namedParameters.processId**: `string`

• **\_\_namedParameters.to?**: `string`

#### Returns

`Promise`\<[`AoSUMessageNode`](../../../../../types/ao/type-aliases/AoSUMessageNode.md)\>

#### Implementation of

[`AoSU`](../../../../../types/ao/interfaces/AoSU.md).[`getProcessMessage`](../../../../../types/ao/interfaces/AoSU.md#getprocessmessage)

#### Defined in

[src/common/services/su/remote-su.ts:40](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/su/remote-su.ts#L40)

***

### getProcessMessages()

> **getProcessMessages**(`__namedParameters`): `Promise`\<[`AoSUPage`](../../../../../types/ao/type-aliases/AoSUPage.md)\>

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.from?**: `string`

• **\_\_namedParameters.limit?**: `number`

• **\_\_namedParameters.processId**: `string`

• **\_\_namedParameters.to?**: `string`

#### Returns

`Promise`\<[`AoSUPage`](../../../../../types/ao/type-aliases/AoSUPage.md)\>

#### Implementation of

[`AoSU`](../../../../../types/ao/interfaces/AoSU.md).[`getProcessMessages`](../../../../../types/ao/interfaces/AoSU.md#getprocessmessages)

#### Defined in

[src/common/services/su/remote-su.ts:24](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/su/remote-su.ts#L24)
