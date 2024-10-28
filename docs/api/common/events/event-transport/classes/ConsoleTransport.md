[ao-sdk](../../../../modules.md) / [common/events/event-transport](../index.md) / ConsoleTransport

# Class: ConsoleTransport

## Implements

- [`IEventTransport`](../../../../types/events/interfaces/IEventTransport.md)

## Constructors

### new ConsoleTransport()

> **new ConsoleTransport**(): [`ConsoleTransport`](ConsoleTransport.md)

#### Returns

[`ConsoleTransport`](ConsoleTransport.md)

#### Defined in

[src/common/events/event-transport.ts:20](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/events/event-transport.ts#L20)

## Properties

### logger

> **logger**: [`ILogger`](../../../../utils/logger/interfaces/ILogger.md)

#### Implementation of

[`IEventTransport`](../../../../types/events/interfaces/IEventTransport.md).[`logger`](../../../../types/events/interfaces/IEventTransport.md#logger)

#### Defined in

[src/common/events/event-transport.ts:19](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/events/event-transport.ts#L19)

## Methods

### sendEvents()

> **sendEvents**(`events`, `processId`, `nonce`): `void`

#### Parameters

• **events**: [`AoEvent`](../../../../types/events/type-aliases/AoEvent.md)[]

• **processId**: `string`

• **nonce**: `number`

#### Returns

`void`

#### Implementation of

[`IEventTransport`](../../../../types/events/interfaces/IEventTransport.md).[`sendEvents`](../../../../types/events/interfaces/IEventTransport.md#sendevents)

#### Defined in

[src/common/events/event-transport.ts:24](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/events/event-transport.ts#L24)
