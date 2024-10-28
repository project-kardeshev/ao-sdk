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

[src/common/events/event-vacuum.ts:10](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/events/event-vacuum.ts#L10)

## Properties

### transport

> **transport**: [`CompositeTransport`](../../event-transport/classes/CompositeTransport.md)

#### Implementation of

[`IEventVacuum`](../interfaces/IEventVacuum.md).[`transport`](../interfaces/IEventVacuum.md#transport)

#### Defined in

[src/common/events/event-vacuum.ts:9](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/events/event-vacuum.ts#L9)

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

[src/common/events/event-vacuum.ts:58](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/events/event-vacuum.ts#L58)

***

### isEvent()

> **isEvent**(`parsed`): `any`

#### Parameters

• **parsed**: `any`

#### Returns

`any`

#### Defined in

[src/common/events/event-vacuum.ts:39](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/events/event-vacuum.ts#L39)

***

### normalizeTimestamps()

> **normalizeTimestamps**(`event`): `object`

#### Parameters

• **event**: `object`

#### Returns

`object`

#### Defined in

[src/common/events/event-vacuum.ts:43](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/events/event-vacuum.ts#L43)

***

### parseJson()

> **parseJson**(`line`): `any`

#### Parameters

• **line**: `string`

#### Returns

`any`

#### Defined in

[src/common/events/event-vacuum.ts:28](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/events/event-vacuum.ts#L28)

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

[src/common/events/event-vacuum.ts:14](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/events/event-vacuum.ts#L14)
