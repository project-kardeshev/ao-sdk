[ao-sdk](../../../../modules.md) / [common/process/process](../index.md) / ProcessReadable

# Class: ProcessReadable

## Extends

- [`Process`](Process.md)

## Extended by

- [`ProcessWritable`](ProcessWritable.md)

## Implements

- [`AoProcessRead`](../../../../types/ao/interfaces/AoProcessRead.md)

## Constructors

### new ProcessReadable()

> **new ProcessReadable**(`config`): [`ProcessReadable`](ProcessReadable.md)

#### Parameters

• **config**: [`ProcessConfig`](../type-aliases/ProcessConfig.md)

#### Returns

[`ProcessReadable`](ProcessReadable.md)

#### Overrides

[`Process`](Process.md).[`constructor`](Process.md#constructors)

#### Defined in

common/process/process.ts:37

## Properties

### ao

> `readonly` **ao**: [`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md)

#### Implementation of

[`AoProcessRead`](../../../../types/ao/interfaces/AoProcessRead.md).[`ao`](../../../../types/ao/interfaces/AoProcessRead.md#ao)

#### Inherited from

[`Process`](Process.md).[`ao`](Process.md#ao)

#### Defined in

common/process/process.ts:19

***

### logger

> `readonly` **logger**: [`Logger`](../../../../utils/logger/classes/Logger.md)

#### Implementation of

[`AoProcessRead`](../../../../types/ao/interfaces/AoProcessRead.md).[`logger`](../../../../types/ao/interfaces/AoProcessRead.md#logger)

#### Inherited from

[`Process`](Process.md).[`logger`](Process.md#logger)

#### Defined in

common/process/process.ts:18

***

### processId

> `readonly` **processId**: `string`

#### Implementation of

[`AoProcessRead`](../../../../types/ao/interfaces/AoProcessRead.md).[`processId`](../../../../types/ao/interfaces/AoProcessRead.md#processid)

#### Inherited from

[`Process`](Process.md).[`processId`](Process.md#processid)

#### Defined in

common/process/process.ts:20

## Methods

### read()

> **read**(`__namedParameters`, `options`?): `Promise`\<[`AoResult`](../../../../types/ao/type-aliases/AoResult.md) & `object`\>

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.data?**: `string` \| `number`

• **\_\_namedParameters.tags?**: `object`[]

• **\_\_namedParameters.target?**: `string`

• **options?**: [`AoEvaluationOptions`](../../../../types/ao/type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<[`AoResult`](../../../../types/ao/type-aliases/AoResult.md) & `object`\>

#### Implementation of

[`AoProcessRead`](../../../../types/ao/interfaces/AoProcessRead.md).[`read`](../../../../types/ao/interfaces/AoProcessRead.md#read)

#### Defined in

common/process/process.ts:41
