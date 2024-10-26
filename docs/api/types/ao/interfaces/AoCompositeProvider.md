[ao-sdk](../../../modules.md) / [types/ao](../index.md) / AoCompositeProvider

# Interface: AoCompositeProvider

## Extends

- [`AoCU`](AoCU.md).[`AoMU`](AoMU.md).[`AoSU`](AoSU.md)

## Properties

### cu

> **cu**: [`AoCU`](AoCU.md)

#### Defined in

[types/ao.ts:267](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L267)

***

### eventManager

> **eventManager**: [`EventVacuum`](../../../common/events/event-vacuum/classes/EventVacuum.md)

#### Defined in

[types/ao.ts:271](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L271)

***

### memoryManager

> **memoryManager**: [`AoMemoryProvider`](AoMemoryProvider.md)

#### Defined in

[types/ao.ts:272](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L272)

***

### mu

> **mu**: [`AoMU`](AoMU.md)

#### Defined in

[types/ao.ts:268](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L268)

***

### su

> **su**: [`AoSU`](AoSU.md)

#### Defined in

[types/ao.ts:269](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L269)

***

### txCache

> **txCache**: [`AoMessageCache`](../../cache/interfaces/AoMessageCache.md)

#### Defined in

[types/ao.ts:270](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L270)

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

#### Inherited from

[`AoMU`](AoMU.md).[`debug`](AoMU.md#debug)

#### Defined in

[types/ao.ts:214](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L214)

***

### dryrun()

> **dryrun**(`p`, `options`?): `Promise`\<[`AoResult`](../type-aliases/AoResult.md) & `object`\>

#### Parameters

• **p**

• **p.message**: `Partial`\<[`AoMessage`](../type-aliases/AoMessage.md)\>

• **options?**: [`AoEvaluationOptions`](../type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<[`AoResult`](../type-aliases/AoResult.md) & `object`\>

#### Inherited from

[`AoCU`](AoCU.md).[`dryrun`](AoCU.md#dryrun)

#### Defined in

[types/ao.ts:192](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L192)

***

### getProcessMessage()

> **getProcessMessage**(`p`): `Promise`\<[`AoSUMessageNode`](../type-aliases/AoSUMessageNode.md)\>

#### Parameters

• **p**

• **p.messageId**: `string`

• **p.processId**: `string`

#### Returns

`Promise`\<[`AoSUMessageNode`](../type-aliases/AoSUMessageNode.md)\>

#### Inherited from

[`AoSU`](AoSU.md).[`getProcessMessage`](AoSU.md#getprocessmessage)

#### Defined in

[types/ao.ts:259](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L259)

***

### getProcessMessages()

> **getProcessMessages**(`p`): `Promise`\<[`AoSUPage`](../type-aliases/AoSUPage.md)\>

#### Parameters

• **p**

• **p.from?**: `number`

• **p.limit?**: `number`

• **p.processId**: `string`

• **p.to?**: `number`

#### Returns

`Promise`\<[`AoSUPage`](../type-aliases/AoSUPage.md)\>

#### Inherited from

[`AoSU`](AoSU.md).[`getProcessMessages`](AoSU.md#getprocessmessages)

#### Defined in

[types/ao.ts:252](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L252)

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

#### Inherited from

[`AoMU`](AoMU.md).[`message`](AoMU.md#message)

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

#### Inherited from

[`AoMU`](AoMU.md).[`monitor`](AoMU.md#monitor)

#### Defined in

[types/ao.ts:212](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L212)

***

### result()

> **result**(`p`, `options`?): `Promise`\<[`AoResult`](../type-aliases/AoResult.md) & `object`\>

#### Parameters

• **p**

• **p.messageId**: `string`

• **options?**: [`AoEvaluationOptions`](../type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<[`AoResult`](../type-aliases/AoResult.md) & `object`\>

#### Inherited from

[`AoCU`](AoCU.md).[`result`](AoCU.md#result)

#### Defined in

[types/ao.ts:196](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L196)

***

### unmonitor()

> **unmonitor**(`p`): `Promise`\<`void`\>

#### Parameters

• **p**

• **p.processId**: `string`

• **p.signer**: [`AoSigner`](../type-aliases/AoSigner.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AoMU`](AoMU.md).[`unmonitor`](AoMU.md#unmonitor)

#### Defined in

[types/ao.ts:213](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/types/ao.ts#L213)
