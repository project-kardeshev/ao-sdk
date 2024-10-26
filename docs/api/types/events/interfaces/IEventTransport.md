[ao-sdk](../../../modules.md) / [types/events](../index.md) / IEventTransport

# Interface: IEventTransport

## Properties

### logger

> **logger**: [`ILogger`](../../../utils/logger/interfaces/ILogger.md)

#### Defined in

[types/events.ts:9](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/events.ts#L9)

***

### sendEvents()

> **sendEvents**: (`events`, `processId`, `nonce`) => `void`

#### Parameters

• **events**: [`AoEvent`](../type-aliases/AoEvent.md)[]

• **processId**: `string`

• **nonce**: `number`

#### Returns

`void`

#### Defined in

[types/events.ts:10](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/events.ts#L10)
