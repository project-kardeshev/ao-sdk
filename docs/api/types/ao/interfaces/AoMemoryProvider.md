[ao-sdk](../../../modules.md) / [types/ao](../index.md) / AoMemoryProvider

# Interface: AoMemoryProvider

## Properties

### su

> **su**: [`AoSU`](AoSU.md)

#### Defined in

[src/types/ao.ts:166](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L166)

***

### txCache

> **txCache**: [`AoMessageCache`](../../cache/interfaces/AoMessageCache.md)

#### Defined in

[src/types/ao.ts:167](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L167)

## Methods

### getMemory()

> **getMemory**(`p`?): `Promise`\<`Memory`\>

#### Parameters

• **p?**

• **p.messageId?**: `string`

• **p.timestamp?**: `number`

#### Returns

`Promise`\<`Memory`\>

#### Defined in

[src/types/ao.ts:168](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L168)

***

### getNonce()

> **getNonce**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/types/ao.ts:174](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L174)

***

### setMemory()

> **setMemory**(`memory`): `Promise`\<`void`\>

#### Parameters

• **memory**: `Memory`

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/types/ao.ts:172](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L172)

***

### sha256()

> **sha256**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/types/ao.ts:173](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L173)
