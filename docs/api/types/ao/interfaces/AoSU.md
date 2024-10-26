[ao-sdk](../../../modules.md) / [types/ao](../index.md) / AoSU

# Interface: AoSU

## Extended by

- [`AoCompositeProvider`](AoCompositeProvider.md)

## Methods

### getProcessMessage()

> **getProcessMessage**(`p`): `Promise`\<[`AoSUMessageNode`](../type-aliases/AoSUMessageNode.md)\>

#### Parameters

• **p**

• **p.messageId**: `string`

• **p.processId**: `string`

#### Returns

`Promise`\<[`AoSUMessageNode`](../type-aliases/AoSUMessageNode.md)\>

#### Defined in

[types/ao.ts:259](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L259)

***

### getProcessMessages()

> **getProcessMessages**(`p`): `Promise`\<[`AoSUPage`](../type-aliases/AoSUPage.md)\>

#### Parameters

• **p**

• **p.from?**: `number`

• **p.limit?**: `number`

• **p.processId**: `string`

• **p.to?**: `number`

#### Returns

`Promise`\<[`AoSUPage`](../type-aliases/AoSUPage.md)\>

#### Defined in

[types/ao.ts:252](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L252)
