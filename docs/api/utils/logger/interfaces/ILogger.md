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

[utils/logger.ts:31](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/logger.ts#L31)

***

### debug()

> **debug**: (`message`, ...`args`) => `void`

#### Parameters

• **message**: `string`

• ...**args**: `unknown`[]

#### Returns

`void`

#### Defined in

[utils/logger.ts:30](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/logger.ts#L30)

***

### error()

> **error**: (`message`, ...`args`) => `void`

#### Parameters

• **message**: `string`

• ...**args**: `unknown`[]

#### Returns

`void`

#### Defined in

[utils/logger.ts:29](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/logger.ts#L29)

***

### info()

> **info**: (`message`, ...`args`) => `void`

#### Parameters

• **message**: `string`

• ...**args**: `unknown`[]

#### Returns

`void`

#### Defined in

[utils/logger.ts:27](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/logger.ts#L27)

***

### setLogLevel()

> **setLogLevel**: (`level`) => `void`

#### Parameters

• **level**: `"info"` \| `"debug"` \| `"error"` \| `"warn"` \| `"none"`

#### Returns

`void`

#### Defined in

[utils/logger.ts:26](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/logger.ts#L26)

***

### warn()

> **warn**: (`message`, ...`args`) => `void`

#### Parameters

• **message**: `string`

• ...**args**: `unknown`[]

#### Returns

`void`

#### Defined in

[utils/logger.ts:28](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/logger.ts#L28)
