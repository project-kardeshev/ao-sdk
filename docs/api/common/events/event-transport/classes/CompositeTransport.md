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

[src/common/events/event-transport.ts:7](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/events/event-transport.ts#L7)

## Properties

### transports

> **transports**: [`IEventTransport`](../../../../types/events/interfaces/IEventTransport.md)[]

#### Defined in

[src/common/events/event-transport.ts:6](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/events/event-transport.ts#L6)

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

[src/common/events/event-transport.ts:11](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/events/event-transport.ts#L11)
