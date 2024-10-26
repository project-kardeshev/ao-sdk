[ao-sdk](../../../../modules.md) / [common/events/event-vacuum](../index.md) / EventVacuum

# Class: EventVacuum

## Implements

- [`IEventVacuum`](../interfaces/IEventVacuum.md)

## Constructors

### new EventVacuum()

> **new EventVacuum**(`transport`): [`EventVacuum`](EventVacuum.md)

#### Parameters

• **transport**: [`CompositeTransport`](../../event-transport/classes/CompositeTransport.md)

#### Returns

[`EventVacuum`](EventVacuum.md)

#### Defined in

[common/events/event-vacuum.ts:10](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/common/events/event-vacuum.ts#L10)

## Properties

### transport

> **transport**: [`CompositeTransport`](../../event-transport/classes/CompositeTransport.md)

#### Implementation of

[`IEventVacuum`](../interfaces/IEventVacuum.md).[`transport`](../interfaces/IEventVacuum.md#transport)

#### Defined in

[common/events/event-vacuum.ts:9](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/common/events/event-vacuum.ts#L9)

## Methods

### dispatchEvents()

> **dispatchEvents**(`events`, `processId`, `nonce`): `void`

#### Parameters

• **events**: `any`

• **processId**: `any`

• **nonce**: `any`

#### Returns

`void`

#### Defined in

[common/events/event-vacuum.ts:53](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/common/events/event-vacuum.ts#L53)

***

### isEvent()

> **isEvent**(`parsed`): `any`

#### Parameters

• **parsed**: `any`

#### Returns

`any`

#### Defined in

[common/events/event-vacuum.ts:34](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/common/events/event-vacuum.ts#L34)

***

### normalizeTimestamps()

> **normalizeTimestamps**(`event`): `object`

#### Parameters

• **event**: `object`

#### Returns

`object`

#### Defined in

[common/events/event-vacuum.ts:38](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/common/events/event-vacuum.ts#L38)

***

### parseJson()

> **parseJson**(`line`): `any`

#### Parameters

• **line**: `string`

#### Returns

`any`

#### Defined in

[common/events/event-vacuum.ts:24](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/common/events/event-vacuum.ts#L24)

***

### processLogs()

> **processLogs**(`logData`, `processId`, `nonce`): `void`

#### Parameters

• **logData**: `string`

• **processId**: `string`

• **nonce**: `number`

#### Returns

`void`

#### Implementation of

[`IEventVacuum`](../interfaces/IEventVacuum.md).[`processLogs`](../interfaces/IEventVacuum.md#processlogs)

#### Defined in

[common/events/event-vacuum.ts:14](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/common/events/event-vacuum.ts#L14)
