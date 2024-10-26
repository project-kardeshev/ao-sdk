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

[node/events/transports/honeycomb.ts:20](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/node/events/transports/honeycomb.ts#L20)

## Properties

### apiHost

> **apiHost**: `string`

#### Defined in

[node/events/transports/honeycomb.ts:10](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/node/events/transports/honeycomb.ts#L10)

***

### db

> **db**: `undefined` \| `Database`

#### Defined in

[node/events/transports/honeycomb.ts:15](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/node/events/transports/honeycomb.ts#L15)

***

### dbFilePath

> **dbFilePath**: `string`

#### Defined in

[node/events/transports/honeycomb.ts:13](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/node/events/transports/honeycomb.ts#L13)

***

### dbInitialized

> **dbInitialized**: `boolean`

#### Defined in

[node/events/transports/honeycomb.ts:14](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/node/events/transports/honeycomb.ts#L14)

***

### honey

> **honey**: `Libhoney`

#### Defined in

[node/events/transports/honeycomb.ts:12](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/node/events/transports/honeycomb.ts#L12)

***

### largestNonces

> **largestNonces**: `Record`\<`string`, `number`\>

#### Defined in

[node/events/transports/honeycomb.ts:16](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/node/events/transports/honeycomb.ts#L16)

***

### logger

> **logger**: [`ILogger`](../../../../../utils/logger/interfaces/ILogger.md)

#### Implementation of

[`IEventTransport`](../../../../../types/events/interfaces/IEventTransport.md).[`logger`](../../../../../types/events/interfaces/IEventTransport.md#logger)

#### Defined in

[node/events/transports/honeycomb.ts:17](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/node/events/transports/honeycomb.ts#L17)

***

### updateNonceStmt

> **updateNonceStmt**: `undefined` \| `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[node/events/transports/honeycomb.ts:18](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/node/events/transports/honeycomb.ts#L18)

***

### writeKey

> **writeKey**: `string`

#### Defined in

[node/events/transports/honeycomb.ts:11](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/node/events/transports/honeycomb.ts#L11)

## Methods

### createDatabase()

> **createDatabase**(): `void`

#### Returns

`void`

#### Defined in

[node/events/transports/honeycomb.ts:67](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/node/events/transports/honeycomb.ts#L67)

***

### ensureDbInitialized()

> **ensureDbInitialized**(): `void`

#### Returns

`void`

#### Defined in

[node/events/transports/honeycomb.ts:41](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/node/events/transports/honeycomb.ts#L41)

***

### ensureLargestNonces()

> **ensureLargestNonces**(): `void`

#### Returns

`void`

#### Defined in

[node/events/transports/honeycomb.ts:54](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/node/events/transports/honeycomb.ts#L54)

***

### getLargestNonce()

> **getLargestNonce**(`processId`): `number`

#### Parameters

• **processId**: `string`

#### Returns

`number`

#### Defined in

[node/events/transports/honeycomb.ts:100](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/node/events/transports/honeycomb.ts#L100)

***

### loadLargestNonces()

> **loadLargestNonces**(): `void`

#### Returns

`void`

#### Defined in

[node/events/transports/honeycomb.ts:80](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/node/events/transports/honeycomb.ts#L80)

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

[node/events/transports/honeycomb.ts:124](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/node/events/transports/honeycomb.ts#L124)

***

### updateLargestNonce()

> **updateLargestNonce**(`processId`, `nonce`): `void`

#### Parameters

• **processId**: `string`

• **nonce**: `number`

#### Returns

`void`

#### Defined in

[node/events/transports/honeycomb.ts:104](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/node/events/transports/honeycomb.ts#L104)
