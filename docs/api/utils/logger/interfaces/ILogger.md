[ao-sdk](../../../modules.md) / [utils/logger](../index.md) / ILogger

# Interface: ILogger

## Properties

### child()

> **child**: (`name`) => [`ILogger`](ILogger.md)

#### Parameters

• **name**: `string`

#### Returns

[`ILogger`](ILogger.md)

#### Defined in

[src/utils/logger.ts:16](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/utils/logger.ts#L16)

***

### debug()

> **debug**: (`message`, ...`args`) => `void`

#### Parameters

• **message**: `string`

• ...**args**: `unknown`[]

#### Returns

`void`

#### Defined in

[src/utils/logger.ts:15](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/utils/logger.ts#L15)

***

### error()

> **error**: (`message`, ...`args`) => `void`

#### Parameters

• **message**: `string`

• ...**args**: `unknown`[]

#### Returns

`void`

#### Defined in

[src/utils/logger.ts:14](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/utils/logger.ts#L14)

***

### info()

> **info**: (`message`, ...`args`) => `void`

#### Parameters

• **message**: `string`

• ...**args**: `unknown`[]

#### Returns

`void`

#### Defined in

[src/utils/logger.ts:12](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/utils/logger.ts#L12)

***

### setLogLevel()

> **setLogLevel**: (`level`) => `void`

#### Parameters

• **level**: `"info"` \| `"debug"` \| `"error"` \| `"warn"` \| `"none"`

#### Returns

`void`

#### Defined in

[src/utils/logger.ts:11](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/utils/logger.ts#L11)

***

### warn()

> **warn**: (`message`, ...`args`) => `void`

#### Parameters

• **message**: `string`

• ...**args**: `unknown`[]

#### Returns

`void`

#### Defined in

[src/utils/logger.ts:13](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/utils/logger.ts#L13)
