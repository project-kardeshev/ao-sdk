[ao-sdk](../../../modules.md) / [types/ao](../index.md) / AoProcessWrite

# Interface: AoProcessWrite

## Extends

- [`AoProcessRead`](AoProcessRead.md)

## Properties

### ao

> **ao**: [`AoCompositeProvider`](AoCompositeProvider.md)

#### Inherited from

[`AoProcessRead`](AoProcessRead.md).[`ao`](AoProcessRead.md#ao)

#### Defined in

[types/ao.ts:277](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L277)

***

### logger

> **logger**: [`Logger`](../../../utils/logger/classes/Logger.md)

#### Inherited from

[`AoProcessRead`](AoProcessRead.md).[`logger`](AoProcessRead.md#logger)

#### Defined in

[types/ao.ts:276](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L276)

***

### processId

> **processId**: `string`

#### Inherited from

[`AoProcessRead`](AoProcessRead.md).[`processId`](AoProcessRead.md#processid)

#### Defined in

[types/ao.ts:278](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L278)

***

### signer

> **signer**: [`AoSigner`](../type-aliases/AoSigner.md)

#### Defined in

[types/ao.ts:293](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L293)

## Methods

### read()

> **read**(`p`, `options`?): `Promise`\<[`AoResult`](../type-aliases/AoResult.md)\>

#### Parameters

• **p**

• **p.data?**: `string` \| `number`

• **p.tags?**: `object`[]

• **p.target?**: `string`

• **options?**: [`AoEvaluationOptions`](../type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<[`AoResult`](../type-aliases/AoResult.md)\>

#### Inherited from

[`AoProcessRead`](AoProcessRead.md).[`read`](AoProcessRead.md#read)

#### Defined in

[types/ao.ts:282](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L282)

***

### write()

> **write**(`p`, `options`?): `Promise`\<[`AoResult`](../type-aliases/AoResult.md)\>

#### Parameters

• **p**

• **p.data?**: `string` \| `number`

• **p.tags?**: `object`[]

• **p.target?**: `string`

• **options?**: [`AoEvaluationOptions`](../type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<[`AoResult`](../type-aliases/AoResult.md)\>

#### Defined in

[types/ao.ts:294](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L294)
