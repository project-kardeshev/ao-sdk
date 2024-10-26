[ao-sdk](../../../modules.md) / [types/ao](../index.md) / AoMemoryProvider

# Interface: AoMemoryProvider

## Properties

### su

> **su**: [`AoSU`](AoSU.md)

#### Defined in

[types/ao.ts:174](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L174)

***

### txCache

> **txCache**: [`AoMessageCache`](../../cache/interfaces/AoMessageCache.md)

#### Defined in

[types/ao.ts:175](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L175)

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

[types/ao.ts:176](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L176)

***

### getNonce()

> **getNonce**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

[types/ao.ts:182](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L182)

***

### setMemory()

> **setMemory**(`memory`): `Promise`\<`void`\>

#### Parameters

• **memory**: `Memory`

#### Returns

`Promise`\<`void`\>

#### Defined in

[types/ao.ts:180](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L180)

***

### sha256()

> **sha256**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[types/ao.ts:181](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L181)
