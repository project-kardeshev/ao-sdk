[ao-sdk](../../../modules.md) / [types/ao](../index.md) / AoCompositeProvider

# Interface: AoCompositeProvider

## Extends

- [`AoCU`](AoCU.md).[`AoMU`](AoMU.md).[`AoSU`](AoSU.md)

## Properties

### cu

> **cu**: [`AoCU`](AoCU.md)

#### Defined in

[src/types/ao.ts:271](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L271)

***

### eventManager?

> `optional` **eventManager**: [`EventVacuum`](../../../common/events/event-vacuum/classes/EventVacuum.md)

#### Defined in

[src/types/ao.ts:275](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L275)

***

### memoryManager?

> `optional` **memoryManager**: [`AoMemoryProvider`](AoMemoryProvider.md)

#### Defined in

[src/types/ao.ts:276](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L276)

***

### mu

> **mu**: [`AoMU`](AoMU.md)

#### Defined in

[src/types/ao.ts:272](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L272)

***

### su

> **su**: [`AoSU`](AoSU.md)

#### Defined in

[src/types/ao.ts:273](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L273)

***

### txCache?

> `optional` **txCache**: [`AoMessageCache`](../../cache/interfaces/AoMessageCache.md)

#### Defined in

[src/types/ao.ts:274](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L274)

## Methods

### dryrun()

> **dryrun**(`p`, `options`?): `Promise`\<[`AoResult`](../type-aliases/AoResult.md) & `object`\>

#### Parameters

• **p**

• **p.message**: `Partial`\<[`AoMessage`](../type-aliases/AoMessage.md)\> & `object`

• **options?**: [`AoEvaluationOptions`](../type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<[`AoResult`](../type-aliases/AoResult.md) & `object`\>

#### Inherited from

[`AoCU`](AoCU.md).[`dryrun`](AoCU.md#dryrun)

#### Defined in

[src/types/ao.ts:185](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L185)

***

### getProcess()

> **getProcess**(`p`): `Promise`\<`Partial`\<`Pick`\<`DataItem`, `"tags"` \| `"data"` \| `"anchor"`\>\>\>

#### Parameters

• **p**

• **p.processId**: `string`

#### Returns

`Promise`\<`Partial`\<`Pick`\<`DataItem`, `"tags"` \| `"data"` \| `"anchor"`\>\>\>

#### Inherited from

[`AoSU`](AoSU.md).[`getProcess`](AoSU.md#getprocess)

#### Defined in

[src/types/ao.ts:267](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L267)

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

[src/types/ao.ts:262](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L262)

***

### getProcessMessages()

> **getProcessMessages**(`p`): `Promise`\<[`AoSUPage`](../type-aliases/AoSUPage.md)\>

#### Parameters

• **p**

• **p.from?**: `string`

• **p.limit?**: `number`

• **p.processId**: `string`

• **p.to?**: `string`

#### Returns

`Promise`\<[`AoSUPage`](../type-aliases/AoSUPage.md)\>

#### Inherited from

[`AoSU`](AoSU.md).[`getProcessMessages`](AoSU.md#getprocessmessages)

#### Defined in

[src/types/ao.ts:255](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L255)

***

### message()

> **message**(`p`, `options`?): `Promise`\<`string`\>

#### Parameters

• **p**: `Partial`\<`Pick`\<`DataItem`, `"tags"` \| `"data"` \| `"anchor"`\>\> & `object`

• **options?**: [`AoEvaluationOptions`](../type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`AoMU`](AoMU.md).[`message`](AoMU.md#message)

#### Defined in

[src/types/ao.ts:204](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L204)

***

### monitor()

> **monitor**(`p`): `Promise`\<`string`\>

#### Parameters

• **p**: `Partial`\<`Pick`\<`DataItem`, `"tags"` \| `"data"` \| `"anchor"`\>\> & `object`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`AoMU`](AoMU.md).[`monitor`](AoMU.md#monitor)

#### Defined in

[src/types/ao.ts:211](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L211)

***

### result()

> **result**(`p`, `options`?): `Promise`\<[`AoResult`](../type-aliases/AoResult.md) & `object`\>

#### Parameters

• **p**

• **p.messageId**: `string`

• **p.processId?**: `string`

• **options?**: [`AoEvaluationOptions`](../type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<[`AoResult`](../type-aliases/AoResult.md) & `object`\>

#### Inherited from

[`AoCU`](AoCU.md).[`result`](AoCU.md#result)

#### Defined in

[src/types/ao.ts:189](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L189)

***

### state()

> **state**(`p`, `options`?): `Promise`\<`Memory`\>

#### Parameters

• **p**

• **p.processId**: `string`

• **options?**: [`AoEvaluationOptions`](../type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<`Memory`\>

#### Inherited from

[`AoCU`](AoCU.md).[`state`](AoCU.md#state)

#### Defined in

[src/types/ao.ts:197](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L197)

***

### unmonitor()

> **unmonitor**(`p`): `Promise`\<`string`\>

#### Parameters

• **p**: `Partial`\<`Pick`\<`DataItem`, `"tags"` \| `"data"` \| `"anchor"`\>\> & `object`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`AoMU`](AoMU.md).[`unmonitor`](AoMU.md#unmonitor)

#### Defined in

[src/types/ao.ts:217](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/ao.ts#L217)
