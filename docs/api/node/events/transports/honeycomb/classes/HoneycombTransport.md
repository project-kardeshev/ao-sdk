[ao-sdk](../../../../../modules.md) / [node/events/transports/honeycomb](../index.md) / HoneycombTransport

# Class: HoneycombTransport

## Implements

- [`IEventTransport`](../../../../../types/events/interfaces/IEventTransport.md)

## Constructors

### new HoneycombTransport()

> **new HoneycombTransport**(`__namedParameters`): [`HoneycombTransport`](HoneycombTransport.md)

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.apiHost**: `undefined` \| `string` = `'https://api.honeycomb.io'`

• **\_\_namedParameters.dataset**: `any`

• **\_\_namedParameters.dbFilePath**: `undefined` \| `string` = `'./largest_nonces.db'`

• **\_\_namedParameters.logger**: `any` = `...`

• **\_\_namedParameters.writeKey**: `any`

#### Returns

[`HoneycombTransport`](HoneycombTransport.md)

#### Defined in

[src/node/events/transports/honeycomb.ts:24](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/node/events/transports/honeycomb.ts#L24)

## Properties

### apiHost

> **apiHost**: `string`

#### Defined in

[src/node/events/transports/honeycomb.ts:14](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/node/events/transports/honeycomb.ts#L14)

***

### db

> **db**: `undefined` \| `Database`

#### Defined in

[src/node/events/transports/honeycomb.ts:19](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/node/events/transports/honeycomb.ts#L19)

***

### dbFilePath

> **dbFilePath**: `string`

#### Defined in

[src/node/events/transports/honeycomb.ts:17](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/node/events/transports/honeycomb.ts#L17)

***

### dbInitialized

> **dbInitialized**: `boolean`

#### Defined in

[src/node/events/transports/honeycomb.ts:18](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/node/events/transports/honeycomb.ts#L18)

***

### honey

> **honey**: `Libhoney`

#### Defined in

[src/node/events/transports/honeycomb.ts:16](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/node/events/transports/honeycomb.ts#L16)

***

### largestNonces

> **largestNonces**: `Record`\<`string`, `number`\>

#### Defined in

[src/node/events/transports/honeycomb.ts:20](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/node/events/transports/honeycomb.ts#L20)

***

### logger

> **logger**: [`ILogger`](../../../../../utils/logger/interfaces/ILogger.md)

#### Implementation of

[`IEventTransport`](../../../../../types/events/interfaces/IEventTransport.md).[`logger`](../../../../../types/events/interfaces/IEventTransport.md#logger)

#### Defined in

[src/node/events/transports/honeycomb.ts:21](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/node/events/transports/honeycomb.ts#L21)

***

### updateNonceStmt

> **updateNonceStmt**: `undefined` \| `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[src/node/events/transports/honeycomb.ts:22](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/node/events/transports/honeycomb.ts#L22)

***

### writeKey

> **writeKey**: `string`

#### Defined in

[src/node/events/transports/honeycomb.ts:15](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/node/events/transports/honeycomb.ts#L15)

## Methods

### createDatabase()

> **createDatabase**(): `void`

#### Returns

`void`

#### Defined in

[src/node/events/transports/honeycomb.ts:71](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/node/events/transports/honeycomb.ts#L71)

***

### ensureDbInitialized()

> **ensureDbInitialized**(): `void`

#### Returns

`void`

#### Defined in

[src/node/events/transports/honeycomb.ts:45](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/node/events/transports/honeycomb.ts#L45)

***

### ensureLargestNonces()

> **ensureLargestNonces**(): `void`

#### Returns

`void`

#### Defined in

[src/node/events/transports/honeycomb.ts:58](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/node/events/transports/honeycomb.ts#L58)

***

### getLargestNonce()

> **getLargestNonce**(`processId`): `number`

#### Parameters

• **processId**: `string`

#### Returns

`number`

#### Defined in

[src/node/events/transports/honeycomb.ts:104](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/node/events/transports/honeycomb.ts#L104)

***

### loadLargestNonces()

> **loadLargestNonces**(): `void`

#### Returns

`void`

#### Defined in

[src/node/events/transports/honeycomb.ts:84](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/node/events/transports/honeycomb.ts#L84)

***

### sendEvents()

> **sendEvents**(`events`, `processId`, `nonce`): `Promise`\<`void`\>

#### Parameters

• **events**: [`AoEvent`](../../../../../types/events/type-aliases/AoEvent.md)[]

• **processId**: `string`

• **nonce**: `number`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IEventTransport`](../../../../../types/events/interfaces/IEventTransport.md).[`sendEvents`](../../../../../types/events/interfaces/IEventTransport.md#sendevents)

#### Defined in

[src/node/events/transports/honeycomb.ts:128](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/node/events/transports/honeycomb.ts#L128)

***

### updateLargestNonce()

> **updateLargestNonce**(`processId`, `nonce`): `void`

#### Parameters

• **processId**: `string`

• **nonce**: `number`

#### Returns

`void`

#### Defined in

[src/node/events/transports/honeycomb.ts:108](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/node/events/transports/honeycomb.ts#L108)
