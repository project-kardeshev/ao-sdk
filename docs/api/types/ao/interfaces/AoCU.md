[ao-sdk](../../../modules.md) / [types/ao](../index.md) / AoCU

# Interface: AoCU

## Extended by

- [`AoCompositeProvider`](AoCompositeProvider.md)

## Methods

### dryrun()

> **dryrun**(`p`, `options`?): `Promise`\<[`AoResult`](../type-aliases/AoResult.md) & `object`\>

#### Parameters

• **p**

• **p.message**: `Partial`\<[`AoMessage`](../type-aliases/AoMessage.md)\> & `object`

• **options?**: [`AoEvaluationOptions`](../type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<[`AoResult`](../type-aliases/AoResult.md) & `object`\>

#### Defined in

[src/types/ao.ts:185](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L185)

***

### result()

> **result**(`p`, `options`?): `Promise`\<[`AoResult`](../type-aliases/AoResult.md) & `object`\>

#### Parameters

• **p**

• **p.messageId**: `string`

• **p.processId?**: `string`

• **options?**: [`AoEvaluationOptions`](../type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<[`AoResult`](../type-aliases/AoResult.md) & `object`\>

#### Defined in

[src/types/ao.ts:189](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L189)

***

### state()

> **state**(`p`, `options`?): `Promise`\<`Memory`\>

#### Parameters

• **p**

• **p.processId**: `string`

• **options?**: [`AoEvaluationOptions`](../type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<`Memory`\>

#### Defined in

[src/types/ao.ts:197](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L197)
