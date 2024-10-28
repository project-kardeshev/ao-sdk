[ao-sdk](../../../modules.md) / [types/ao](../index.md) / AoSU

# Interface: AoSU

## Extended by

- [`AoCompositeProvider`](AoCompositeProvider.md)

## Methods

### getProcess()

> **getProcess**(`p`): `Promise`\<`Partial`\<`Pick`\<`DataItem`, `"tags"` \| `"data"` \| `"anchor"`\>\>\>

#### Parameters

• **p**

• **p.processId**: `string`

#### Returns

`Promise`\<`Partial`\<`Pick`\<`DataItem`, `"tags"` \| `"data"` \| `"anchor"`\>\>\>

#### Defined in

[src/types/ao.ts:267](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L267)

***

### getProcessMessage()

> **getProcessMessage**(`p`): `Promise`\<[`AoSUMessageNode`](../type-aliases/AoSUMessageNode.md)\>

#### Parameters

• **p**

• **p.messageId**: `string`

• **p.processId**: `string`

#### Returns

`Promise`\<[`AoSUMessageNode`](../type-aliases/AoSUMessageNode.md)\>

#### Defined in

[src/types/ao.ts:262](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L262)

***

### getProcessMessages()

> **getProcessMessages**(`p`): `Promise`\<[`AoSUPage`](../type-aliases/AoSUPage.md)\>

#### Parameters

• **p**

• **p.from?**: `string`

• **p.limit?**: `number`

• **p.processId**: `string`

• **p.to?**: `string`

#### Returns

`Promise`\<[`AoSUPage`](../type-aliases/AoSUPage.md)\>

#### Defined in

[src/types/ao.ts:255](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L255)
