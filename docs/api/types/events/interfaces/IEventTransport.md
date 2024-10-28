[ao-sdk](../../../modules.md) / [types/events](../index.md) / IEventTransport

# Interface: IEventTransport

## Properties

### logger

> **logger**: [`ILogger`](../../../utils/logger/interfaces/ILogger.md)

#### Defined in

[src/types/events.ts:10](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/events.ts#L10)

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

[src/types/events.ts:11](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/events.ts#L11)
