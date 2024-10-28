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

[src/types/ao.ts:295](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L295)

***

### logger

> **logger**: [`Logger`](../../../utils/logger/classes/Logger.md)

#### Inherited from

[`AoProcess`](AoProcess.md).[`logger`](AoProcess.md#logger)

#### Defined in

[src/types/ao.ts:294](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L294)

***

### processId

> **processId**: `string`

#### Inherited from

[`AoProcess`](AoProcess.md).[`processId`](AoProcess.md#processid)

#### Defined in

[src/types/ao.ts:296](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L296)

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

[src/types/ao.ts:300](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L300)
