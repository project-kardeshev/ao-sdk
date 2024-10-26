[ao-sdk](../../../modules.md) / [utils/logger](../index.md) / Logger

# Class: Logger

## Implements

- [`ILogger`](../interfaces/ILogger.md)

## Constructors

### new Logger()

> **new Logger**(`__namedParameters`): [`Logger`](Logger.md)

#### Parameters

• **\_\_namedParameters** = `{}`

• **\_\_namedParameters.level?**: `"info"` \| `"debug"` \| `"error"` \| `"warn"` \| `"none"` = `'info'`

#### Returns

[`Logger`](Logger.md)

#### Defined in

[utils/logger.ts:40](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/logger.ts#L40)

## Properties

### default

> `static` **default**: [`Logger`](Logger.md)

#### Defined in

[utils/logger.ts:38](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/logger.ts#L38)

## Methods

### child()

> **child**(`name`): `any`

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Implementation of

[`ILogger`](../interfaces/ILogger.md).[`child`](../interfaces/ILogger.md#child)

#### Defined in

[utils/logger.ts:90](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/logger.ts#L90)

***

### debug()

> **debug**(`message`, ...`args`): `void`

#### Parameters

• **message**: `string`

• ...**args**: `unknown`[]

#### Returns

`void`

#### Implementation of

[`ILogger`](../interfaces/ILogger.md).[`debug`](../interfaces/ILogger.md#debug)

#### Defined in

[utils/logger.ts:85](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/logger.ts#L85)

***

### error()

> **error**(`message`, ...`args`): `void`

#### Parameters

• **message**: `string`

• ...**args**: `unknown`[]

#### Returns

`void`

#### Implementation of

[`ILogger`](../interfaces/ILogger.md).[`error`](../interfaces/ILogger.md#error)

#### Defined in

[utils/logger.ts:80](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/logger.ts#L80)

***

### info()

> **info**(`message`, ...`args`): `void`

#### Parameters

• **message**: `string`

• ...**args**: `unknown`[]

#### Returns

`void`

#### Implementation of

[`ILogger`](../interfaces/ILogger.md).[`info`](../interfaces/ILogger.md#info)

#### Defined in

[utils/logger.ts:70](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/logger.ts#L70)

***

### setLogLevel()

> **setLogLevel**(`level`): `void`

#### Parameters

• **level**: `"info"` \| `"debug"` \| `"error"` \| `"warn"` \| `"none"`

#### Returns

`void`

#### Implementation of

[`ILogger`](../interfaces/ILogger.md).[`setLogLevel`](../interfaces/ILogger.md#setloglevel)

#### Defined in

[utils/logger.ts:95](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/logger.ts#L95)

***

### warn()

> **warn**(`message`, ...`args`): `void`

#### Parameters

• **message**: `string`

• ...**args**: `unknown`[]

#### Returns

`void`

#### Implementation of

[`ILogger`](../interfaces/ILogger.md).[`warn`](../interfaces/ILogger.md#warn)

#### Defined in

[utils/logger.ts:75](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/logger.ts#L75)
