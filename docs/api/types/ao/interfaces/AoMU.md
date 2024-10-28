[ao-sdk](../../../modules.md) / [types/ao](../index.md) / AoMU

# Interface: AoMU

## Extended by

- [`AoCompositeProvider`](AoCompositeProvider.md)

## Methods

### message()

> **message**(`p`, `options`?): `Promise`\<`string`\>

#### Parameters

• **p**: `Partial`\<`Pick`\<`DataItem`, `"tags"` \| `"data"` \| `"anchor"`\>\> & `object`

• **options?**: [`AoEvaluationOptions`](../type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/types/ao.ts:204](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L204)

***

### monitor()

> **monitor**(`p`): `Promise`\<`string`\>

#### Parameters

• **p**: `Partial`\<`Pick`\<`DataItem`, `"tags"` \| `"data"` \| `"anchor"`\>\> & `object`

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/types/ao.ts:211](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L211)

***

### unmonitor()

> **unmonitor**(`p`): `Promise`\<`string`\>

#### Parameters

• **p**: `Partial`\<`Pick`\<`DataItem`, `"tags"` \| `"data"` \| `"anchor"`\>\> & `object`

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/types/ao.ts:217](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L217)
