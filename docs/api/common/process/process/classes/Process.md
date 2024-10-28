[ao-sdk](../../../../modules.md) / [common/process/process](../index.md) / Process

# Class: Process

## Implements

- [`AoProcess`](../../../../types/ao/interfaces/AoProcess.md)

## Constructors

### new Process()

> **new Process**(`__namedParameters`): [`Process`](Process.md)

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.ao**: [`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md)

• **\_\_namedParameters.logger**: [`Logger`](../../../../utils/logger/classes/Logger.md) = `defaultLogger`

• **\_\_namedParameters.processId**: `string`

#### Returns

[`Process`](Process.md)

#### Defined in

[src/common/process/process.ts:22](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/process/process.ts#L22)

## Properties

### ao

> `readonly` **ao**: [`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md)

#### Implementation of

[`AoProcess`](../../../../types/ao/interfaces/AoProcess.md).[`ao`](../../../../types/ao/interfaces/AoProcess.md#ao)

#### Defined in

[src/common/process/process.ts:20](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/process/process.ts#L20)

***

### logger

> `readonly` **logger**: [`Logger`](../../../../utils/logger/classes/Logger.md)

#### Implementation of

[`AoProcess`](../../../../types/ao/interfaces/AoProcess.md).[`logger`](../../../../types/ao/interfaces/AoProcess.md#logger)

#### Defined in

[src/common/process/process.ts:19](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/process/process.ts#L19)

***

### processId

> `readonly` **processId**: `string`

#### Implementation of

[`AoProcess`](../../../../types/ao/interfaces/AoProcess.md).[`processId`](../../../../types/ao/interfaces/AoProcess.md#processid)

#### Defined in

[src/common/process/process.ts:21](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/process/process.ts#L21)

## Methods

### createRemoteProcess()

> `static` **createRemoteProcess**(`__namedParameters`): `Promise`\<[`ProcessReadable`](ProcessReadable.md) \| [`ProcessWritable`](ProcessWritable.md)\>

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.cuUrl**: `string`

• **\_\_namedParameters.logger?**: [`Logger`](../../../../utils/logger/classes/Logger.md)

• **\_\_namedParameters.muUrl**: `string`

• **\_\_namedParameters.processId**: `string`

• **\_\_namedParameters.signer?**: [`AoSigner`](../../../../types/ao/type-aliases/AoSigner.md)

• **\_\_namedParameters.suUrl**: `string`

#### Returns

`Promise`\<[`ProcessReadable`](ProcessReadable.md) \| [`ProcessWritable`](ProcessWritable.md)\>

#### Defined in

[src/common/process/process.ts:55](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/process/process.ts#L55)

***

### init()

#### init(config)

> `static` **init**(`config`): [`ProcessReadable`](ProcessReadable.md) \| [`ProcessWritable`](ProcessWritable.md)

##### Parameters

• **config**: [`ProcessConfig`](../../../../types/ao/type-aliases/ProcessConfig.md) & `object`

##### Returns

[`ProcessReadable`](ProcessReadable.md) \| [`ProcessWritable`](ProcessWritable.md)

- ProcessReadable if no signer is provided, ProcessWritable if signer is provided

##### Defined in

[src/common/process/process.ts:41](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/process/process.ts#L41)

#### init(config)

> `static` **init**(`config`): [`ProcessReadable`](ProcessReadable.md)

##### Parameters

• **config**: [`ProcessConfig`](../../../../types/ao/type-aliases/ProcessConfig.md) & `object`

##### Returns

[`ProcessReadable`](ProcessReadable.md)

##### Defined in

[src/common/process/process.ts:44](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/process/process.ts#L44)

#### init(config)

> `static` **init**(`config`): [`ProcessWritable`](ProcessWritable.md)

##### Parameters

• **config**: [`ProcessConfig`](../../../../types/ao/type-aliases/ProcessConfig.md) & `object`

##### Returns

[`ProcessWritable`](ProcessWritable.md)

##### Defined in

[src/common/process/process.ts:45](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/process/process.ts#L45)
