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

[common/events/event-transport.ts:21](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/common/events/event-transport.ts#L21)

## Properties

### logger

> **logger**: [`ILogger`](../../../../utils/logger/interfaces/ILogger.md)

#### Implementation of

[`IEventTransport`](../../../../types/events/interfaces/IEventTransport.md).[`logger`](../../../../types/events/interfaces/IEventTransport.md#logger)

#### Defined in

[common/events/event-transport.ts:20](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/common/events/event-transport.ts#L20)

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

[common/events/event-transport.ts:25](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/common/events/event-transport.ts#L25)
