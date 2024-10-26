[ao-sdk](../../../modules.md) / [types/ao](../index.md) / AoMU

# Interface: AoMU

## Extended by

- [`AoCompositeProvider`](AoCompositeProvider.md)

## Methods

### debug()

> **debug**(`p`): `Promise`\<`any`\>

#### Parameters

• **p**

• **p.messageId?**: `string`

• **p.page?**: `number`

• **p.pageSize?**: `number`

• **p.processId**: `string`

#### Returns

`Promise`\<`any`\>

#### Defined in

[types/ao.ts:214](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L214)

***

### message()

> **message**(`p`, `options`?): `Promise`\<`string`\>

#### Parameters

• **p**

• **p.message**: `Partial`\<[`AoMessage`](../type-aliases/AoMessage.md)\>

• **p.signer?**: [`AoSigner`](../type-aliases/AoSigner.md)

• **options?**: [`AoEvaluationOptions`](../type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<`string`\>

#### Defined in

[types/ao.ts:205](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L205)

***

### monitor()

> **monitor**(`p`): `Promise`\<`void`\>

#### Parameters

• **p**

• **p.processId**: `string`

• **p.signer**: [`AoSigner`](../type-aliases/AoSigner.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[types/ao.ts:212](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L212)

***

### unmonitor()

> **unmonitor**(`p`): `Promise`\<`void`\>

#### Parameters

• **p**

• **p.processId**: `string`

• **p.signer**: [`AoSigner`](../type-aliases/AoSigner.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[types/ao.ts:213](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L213)
