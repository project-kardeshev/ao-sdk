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

• **\_\_namedParameters**: [`WritableProcessConfig`](../../../../types/ao/type-aliases/WritableProcessConfig.md)

#### Returns

[`ProcessWritable`](ProcessWritable.md)

#### Overrides

[`ProcessReadable`](ProcessReadable.md).[`constructor`](ProcessReadable.md#constructors)

#### Defined in

[src/common/process/process.ts:138](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/process/process.ts#L138)

## Properties

### ao

> **ao**: [`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md)

#### Implementation of

[`AoProcessWrite`](../../../../types/ao/interfaces/AoProcessWrite.md).[`ao`](../../../../types/ao/interfaces/AoProcessWrite.md#ao)

#### Overrides

[`ProcessReadable`](ProcessReadable.md).[`ao`](ProcessReadable.md#ao)

#### Defined in

[src/common/process/process.ts:135](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/process/process.ts#L135)

***

### logger

> **logger**: [`Logger`](../../../../utils/logger/classes/Logger.md)

#### Implementation of

[`AoProcessWrite`](../../../../types/ao/interfaces/AoProcessWrite.md).[`logger`](../../../../types/ao/interfaces/AoProcessWrite.md#logger)

#### Overrides

[`ProcessReadable`](ProcessReadable.md).[`logger`](ProcessReadable.md#logger)

#### Defined in

[src/common/process/process.ts:134](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/process/process.ts#L134)

***

### processId

> **processId**: `string`

#### Implementation of

[`AoProcessWrite`](../../../../types/ao/interfaces/AoProcessWrite.md).[`processId`](../../../../types/ao/interfaces/AoProcessWrite.md#processid)

#### Overrides

[`ProcessReadable`](ProcessReadable.md).[`processId`](ProcessReadable.md#processid)

#### Defined in

[src/common/process/process.ts:136](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/process/process.ts#L136)

***

### signer

> `readonly` **signer**: [`AoSigner`](../../../../types/ao/type-aliases/AoSigner.md)

#### Implementation of

[`AoProcessWrite`](../../../../types/ao/interfaces/AoProcessWrite.md).[`signer`](../../../../types/ao/interfaces/AoProcessWrite.md#signer)

#### Defined in

[src/common/process/process.ts:137](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/process/process.ts#L137)

## Methods

### read()

> **read**(`__namedParameters`, `options`?): `Promise`\<[`AoResult`](../../../../types/ao/type-aliases/AoResult.md) & `object`\>

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.data?**: `string` \| `number`

• **\_\_namedParameters.tags?**: `object`[]

• **options?**: [`AoEvaluationOptions`](../../../../types/ao/type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<[`AoResult`](../../../../types/ao/type-aliases/AoResult.md) & `object`\>

#### Implementation of

[`AoProcessWrite`](../../../../types/ao/interfaces/AoProcessWrite.md).[`read`](../../../../types/ao/interfaces/AoProcessWrite.md#read)

#### Inherited from

[`ProcessReadable`](ProcessReadable.md).[`read`](ProcessReadable.md#read)

#### Defined in

[src/common/process/process.ts:97](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/process/process.ts#L97)

***

### write()

> **write**(`__namedParameters`, `options`?): `Promise`\<[`AoResult`](../../../../types/ao/type-aliases/AoResult.md) & `object`\>

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.data?**: `string`

• **\_\_namedParameters.tags?**: `object`[]

• **options?**: [`AoEvaluationOptions`](../../../../types/ao/type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<[`AoResult`](../../../../types/ao/type-aliases/AoResult.md) & `object`\>

#### Implementation of

[`AoProcessWrite`](../../../../types/ao/interfaces/AoProcessWrite.md).[`write`](../../../../types/ao/interfaces/AoProcessWrite.md#write)

#### Defined in

[src/common/process/process.ts:143](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/process/process.ts#L143)
