[ao-sdk](../../../modules.md) / [types/ao](../index.md) / AoCU

# Interface: AoCU

## Extended by

- [`AoCompositeProvider`](AoCompositeProvider.md)

## Methods

### dryrun()

> **dryrun**(`p`, `options`?): `Promise`\<[`AoResult`](../type-aliases/AoResult.md) & `object`\>

#### Parameters

• **p**

• **p.message**: `Partial`\<[`AoMessage`](../type-aliases/AoMessage.md)\>

• **options?**: [`AoEvaluationOptions`](../type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<[`AoResult`](../type-aliases/AoResult.md) & `object`\>

#### Defined in

[types/ao.ts:192](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L192)

***

### result()

> **result**(`p`, `options`?): `Promise`\<[`AoResult`](../type-aliases/AoResult.md) & `object`\>

#### Parameters

• **p**

• **p.messageId**: `string`

• **options?**: [`AoEvaluationOptions`](../type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<[`AoResult`](../type-aliases/AoResult.md) & `object`\>

#### Defined in

[types/ao.ts:196](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L196)
