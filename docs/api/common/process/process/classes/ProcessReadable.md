[ao-sdk](../../../../modules.md) / [common/process/process](../index.md) / ProcessReadable

# Class: ProcessReadable

## Extended by

- [`ProcessWritable`](ProcessWritable.md)

## Implements

- [`AoProcessRead`](../../../../types/ao/interfaces/AoProcessRead.md)

## Constructors

### new ProcessReadable()

> **new ProcessReadable**(`__namedParameters`): [`ProcessReadable`](ProcessReadable.md)

#### Parameters

• **\_\_namedParameters**: [`ProcessConfig`](../../../../types/ao/type-aliases/ProcessConfig.md)

#### Returns

[`ProcessReadable`](ProcessReadable.md)

#### Defined in

[src/common/process/process.ts:87](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/process/process.ts#L87)

## Properties

### ao

> `readonly` **ao**: [`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md)

#### Implementation of

[`AoProcessRead`](../../../../types/ao/interfaces/AoProcessRead.md).[`ao`](../../../../types/ao/interfaces/AoProcessRead.md#ao)

#### Defined in

[src/common/process/process.ts:85](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/process/process.ts#L85)

***

### logger

> `readonly` **logger**: [`Logger`](../../../../utils/logger/classes/Logger.md)

#### Implementation of

[`AoProcessRead`](../../../../types/ao/interfaces/AoProcessRead.md).[`logger`](../../../../types/ao/interfaces/AoProcessRead.md#logger)

#### Defined in

[src/common/process/process.ts:84](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/process/process.ts#L84)

***

### processId

> `readonly` **processId**: `string`

#### Implementation of

[`AoProcessRead`](../../../../types/ao/interfaces/AoProcessRead.md).[`processId`](../../../../types/ao/interfaces/AoProcessRead.md#processid)

#### Defined in

[src/common/process/process.ts:86](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/process/process.ts#L86)

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

[`AoProcessRead`](../../../../types/ao/interfaces/AoProcessRead.md).[`read`](../../../../types/ao/interfaces/AoProcessRead.md#read)

#### Defined in

[src/common/process/process.ts:97](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/process/process.ts#L97)
