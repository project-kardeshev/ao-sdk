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

[src/utils/logger.ts:25](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/utils/logger.ts#L25)

## Properties

### default

> `static` **default**: [`Logger`](Logger.md)

#### Defined in

[src/utils/logger.ts:23](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/utils/logger.ts#L23)

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

[src/utils/logger.ts:75](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/utils/logger.ts#L75)

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

[src/utils/logger.ts:70](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/utils/logger.ts#L70)

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

[src/utils/logger.ts:65](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/utils/logger.ts#L65)

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

[src/utils/logger.ts:55](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/utils/logger.ts#L55)

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

[src/utils/logger.ts:80](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/utils/logger.ts#L80)

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

[src/utils/logger.ts:60](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/utils/logger.ts#L60)
