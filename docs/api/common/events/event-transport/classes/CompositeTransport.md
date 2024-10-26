[ao-sdk](../../../../modules.md) / [common/events/event-transport](../index.md) / CompositeTransport

# Class: CompositeTransport

## Constructors

### new CompositeTransport()

> **new CompositeTransport**(`transports`): [`CompositeTransport`](CompositeTransport.md)

#### Parameters

• **transports**: [`IEventTransport`](../../../../types/events/interfaces/IEventTransport.md)[]

#### Returns

[`CompositeTransport`](CompositeTransport.md)

#### Defined in

[common/events/event-transport.ts:8](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/common/events/event-transport.ts#L8)

## Properties

### transports

> **transports**: [`IEventTransport`](../../../../types/events/interfaces/IEventTransport.md)[]

#### Defined in

[common/events/event-transport.ts:7](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/common/events/event-transport.ts#L7)

## Methods

### sendEvents()

> **sendEvents**(`events`, `processId`, `nonce`): `void`

#### Parameters

• **events**: [`AoEvent`](../../../../types/events/type-aliases/AoEvent.md)[]

• **processId**: `string`

• **nonce**: `number`

#### Returns

`void`

#### Defined in

[common/events/event-transport.ts:12](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/common/events/event-transport.ts#L12)
