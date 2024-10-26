[ao-sdk](../../../../modules.md) / [common/process/process](../index.md) / ProcessWritable

# Class: ProcessWritable

## Extends

- [`ProcessReadable`](ProcessReadable.md)

## Implements

- [`AoProcessWrite`](../../../../types/ao/interfaces/AoProcessWrite.md)

## Constructors

### new ProcessWritable()

> **new ProcessWritable**(`__namedParameters`): [`ProcessWritable`](ProcessWritable.md)

#### Parameters

• **\_\_namedParameters**: [`ProcessConfig`](../type-aliases/ProcessConfig.md) & `object`

#### Returns

[`ProcessWritable`](ProcessWritable.md)

#### Overrides

[`ProcessReadable`](ProcessReadable.md).[`constructor`](ProcessReadable.md#constructors)

#### Defined in

common/process/process.ts:81

## Properties

### ao

> `readonly` **ao**: [`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md)

#### Implementation of

[`AoProcessWrite`](../../../../types/ao/interfaces/AoProcessWrite.md).[`ao`](../../../../types/ao/interfaces/AoProcessWrite.md#ao)

#### Inherited from

[`ProcessReadable`](ProcessReadable.md).[`ao`](ProcessReadable.md#ao)

#### Defined in

common/process/process.ts:19

***

### logger

> `readonly` **logger**: [`Logger`](../../../../utils/logger/classes/Logger.md)

#### Implementation of

[`AoProcessWrite`](../../../../types/ao/interfaces/AoProcessWrite.md).[`logger`](../../../../types/ao/interfaces/AoProcessWrite.md#logger)

#### Inherited from

[`ProcessReadable`](ProcessReadable.md).[`logger`](ProcessReadable.md#logger)

#### Defined in

common/process/process.ts:18

***

### processId

> `readonly` **processId**: `string`

#### Implementation of

[`AoProcessWrite`](../../../../types/ao/interfaces/AoProcessWrite.md).[`processId`](../../../../types/ao/interfaces/AoProcessWrite.md#processid)

#### Inherited from

[`ProcessReadable`](ProcessReadable.md).[`processId`](ProcessReadable.md#processid)

#### Defined in

common/process/process.ts:20

***

### signer

> `readonly` **signer**: [`AoSigner`](../../../../types/ao/type-aliases/AoSigner.md)

#### Implementation of

[`AoProcessWrite`](../../../../types/ao/interfaces/AoProcessWrite.md).[`signer`](../../../../types/ao/interfaces/AoProcessWrite.md#signer)

#### Defined in

common/process/process.ts:80

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

[`AoProcessWrite`](../../../../types/ao/interfaces/AoProcessWrite.md).[`read`](../../../../types/ao/interfaces/AoProcessWrite.md#read)

#### Inherited from

[`ProcessReadable`](ProcessReadable.md).[`read`](ProcessReadable.md#read)

#### Defined in

common/process/process.ts:41

***

### write()

> **write**(`__namedParameters`, `options`?): `Promise`\<[`AoResult`](../../../../types/ao/type-aliases/AoResult.md) & `object`\>

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.data?**: `string` \| `number`

• **\_\_namedParameters.tags?**: `object`[]

• **\_\_namedParameters.target?**: `string`

• **options?**: [`AoEvaluationOptions`](../../../../types/ao/type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<[`AoResult`](../../../../types/ao/type-aliases/AoResult.md) & `object`\>

#### Implementation of

[`AoProcessWrite`](../../../../types/ao/interfaces/AoProcessWrite.md).[`write`](../../../../types/ao/interfaces/AoProcessWrite.md#write)

#### Defined in

common/process/process.ts:86
