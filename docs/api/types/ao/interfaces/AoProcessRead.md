[ao-sdk](../../../modules.md) / [types/ao](../index.md) / AoProcessRead

# Interface: AoProcessRead

## Extends

- [`AoProcess`](AoProcess.md)

## Extended by

- [`AoProcessWrite`](AoProcessWrite.md)

## Properties

### ao

> **ao**: [`AoCompositeProvider`](AoCompositeProvider.md)

#### Inherited from

[`AoProcess`](AoProcess.md).[`ao`](AoProcess.md#ao)

#### Defined in

[types/ao.ts:277](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L277)

***

### logger

> **logger**: [`Logger`](../../../utils/logger/classes/Logger.md)

#### Inherited from

[`AoProcess`](AoProcess.md).[`logger`](AoProcess.md#logger)

#### Defined in

[types/ao.ts:276](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L276)

***

### processId

> **processId**: `string`

#### Inherited from

[`AoProcess`](AoProcess.md).[`processId`](AoProcess.md#processid)

#### Defined in

[types/ao.ts:278](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L278)

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

#### Defined in

[types/ao.ts:282](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L282)
