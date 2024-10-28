[ao-sdk](../../../../modules.md) / [common/services/composite-provider](../index.md) / AO

# Class: AO

## Implements

- [`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md)

## Constructors

### new AO()

> **new AO**(`__namedParameters`): [`AO`](AO.md)

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.cu**: [`AoCU`](../../../../types/ao/interfaces/AoCU.md)

• **\_\_namedParameters.eventManager?**: [`EventVacuum`](../../../events/event-vacuum/classes/EventVacuum.md)

• **\_\_namedParameters.memoryManager?**: [`AoMemoryProvider`](../../../../types/ao/interfaces/AoMemoryProvider.md)

• **\_\_namedParameters.mu**: [`AoMU`](../../../../types/ao/interfaces/AoMU.md)

• **\_\_namedParameters.su**: [`AoSU`](../../../../types/ao/interfaces/AoSU.md)

• **\_\_namedParameters.txCache?**: [`AoMessageCache`](../../../../types/cache/interfaces/AoMessageCache.md)

#### Returns

[`AO`](AO.md)

#### Defined in

[src/common/services/composite-provider.ts:26](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/composite-provider.ts#L26)

## Properties

### cu

> **cu**: [`AoCU`](../../../../types/ao/interfaces/AoCU.md)

#### Implementation of

[`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md).[`cu`](../../../../types/ao/interfaces/AoCompositeProvider.md#cu)

#### Defined in

[src/common/services/composite-provider.ts:19](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/composite-provider.ts#L19)

***

### eventManager?

> `optional` **eventManager**: [`EventVacuum`](../../../events/event-vacuum/classes/EventVacuum.md)

#### Implementation of

[`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md).[`eventManager`](../../../../types/ao/interfaces/AoCompositeProvider.md#eventmanager)

#### Defined in

[src/common/services/composite-provider.ts:22](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/composite-provider.ts#L22)

***

### memoryManager?

> `optional` **memoryManager**: [`AoMemoryProvider`](../../../../types/ao/interfaces/AoMemoryProvider.md)

#### Implementation of

[`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md).[`memoryManager`](../../../../types/ao/interfaces/AoCompositeProvider.md#memorymanager)

#### Defined in

[src/common/services/composite-provider.ts:23](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/composite-provider.ts#L23)

***

### mu

> **mu**: [`AoMU`](../../../../types/ao/interfaces/AoMU.md)

#### Implementation of

[`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md).[`mu`](../../../../types/ao/interfaces/AoCompositeProvider.md#mu)

#### Defined in

[src/common/services/composite-provider.ts:20](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/composite-provider.ts#L20)

***

### su

> **su**: [`AoSU`](../../../../types/ao/interfaces/AoSU.md)

#### Implementation of

[`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md).[`su`](../../../../types/ao/interfaces/AoCompositeProvider.md#su)

#### Defined in

[src/common/services/composite-provider.ts:21](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/composite-provider.ts#L21)

***

### txCache?

> `optional` **txCache**: [`AoMessageCache`](../../../../types/cache/interfaces/AoMessageCache.md)

#### Implementation of

[`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md).[`txCache`](../../../../types/ao/interfaces/AoCompositeProvider.md#txcache)

#### Defined in

[src/common/services/composite-provider.ts:24](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/composite-provider.ts#L24)

## Methods

### dryrun()

> **dryrun**(`p`, `options`?): `Promise`\<[`AoResult`](../../../../types/ao/type-aliases/AoResult.md)\>

#### Parameters

• **p**

• **p.message**: `Partial`\<[`AoMessage`](../../../../types/ao/type-aliases/AoMessage.md)\> & `object`

• **options?**: `Pick`\<[`AoEvaluationOptions`](../../../../types/ao/type-aliases/AoEvaluationOptions.md), `"messageId"`\>

#### Returns

`Promise`\<[`AoResult`](../../../../types/ao/type-aliases/AoResult.md)\>

#### Implementation of

[`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md).[`dryrun`](../../../../types/ao/interfaces/AoCompositeProvider.md#dryrun)

#### Defined in

[src/common/services/composite-provider.ts:49](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/composite-provider.ts#L49)

***

### getProcess()

> **getProcess**(`p`): `Promise`\<`Partial`\<`Pick`\<`DataItem`, `"tags"` \| `"data"` \| `"anchor"`\>\>\>

#### Parameters

• **p**

• **p.processId**: `string`

#### Returns

`Promise`\<`Partial`\<`Pick`\<`DataItem`, `"tags"` \| `"data"` \| `"anchor"`\>\>\>

#### Implementation of

[`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md).[`getProcess`](../../../../types/ao/interfaces/AoCompositeProvider.md#getprocess)

#### Defined in

[src/common/services/composite-provider.ts:114](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/composite-provider.ts#L114)

***

### getProcessMessage()

> **getProcessMessage**(`p`): `Promise`\<[`AoSUMessageNode`](../../../../types/ao/type-aliases/AoSUMessageNode.md)\>

#### Parameters

• **p**

• **p.messageId**: `string`

• **p.processId**: `string`

#### Returns

`Promise`\<[`AoSUMessageNode`](../../../../types/ao/type-aliases/AoSUMessageNode.md)\>

#### Implementation of

[`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md).[`getProcessMessage`](../../../../types/ao/interfaces/AoCompositeProvider.md#getprocessmessage)

#### Defined in

[src/common/services/composite-provider.ts:107](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/composite-provider.ts#L107)

***

### getProcessMessages()

> **getProcessMessages**(`p`): `Promise`\<[`AoSUPage`](../../../../types/ao/type-aliases/AoSUPage.md)\>

#### Parameters

• **p**

• **p.from?**: `string`

• **p.limit?**: `number`

• **p.processId**: `string`

• **p.to?**: `string`

#### Returns

`Promise`\<[`AoSUPage`](../../../../types/ao/type-aliases/AoSUPage.md)\>

#### Implementation of

[`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md).[`getProcessMessages`](../../../../types/ao/interfaces/AoCompositeProvider.md#getprocessmessages)

#### Defined in

[src/common/services/composite-provider.ts:98](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/composite-provider.ts#L98)

***

### message()

> **message**(`p`, `options`?): `Promise`\<`string`\>

#### Parameters

• **p**: `Partial`\<`Pick`\<`DataItem`, `"tags"` \| `"data"` \| `"anchor"`\>\> & `object`

• **options?**: [`AoEvaluationOptions`](../../../../types/ao/type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md).[`message`](../../../../types/ao/interfaces/AoCompositeProvider.md#message)

#### Defined in

[src/common/services/composite-provider.ts:70](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/composite-provider.ts#L70)

***

### monitor()

> **monitor**(`p`): `Promise`\<`string`\>

#### Parameters

• **p**: `Partial`\<`Pick`\<`DataItem`, `"tags"` \| `"data"` \| `"anchor"`\>\> & `object`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md).[`monitor`](../../../../types/ao/interfaces/AoCompositeProvider.md#monitor)

#### Defined in

[src/common/services/composite-provider.ts:80](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/composite-provider.ts#L80)

***

### result()

> **result**(`p`, `options`?): `Promise`\<[`AoResult`](../../../../types/ao/type-aliases/AoResult.md) & `object`\>

#### Parameters

• **p**

• **p.messageId**: `string`

• **p.processId?**: `string`

• **options?**: [`AoEvaluationOptions`](../../../../types/ao/type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<[`AoResult`](../../../../types/ao/type-aliases/AoResult.md) & `object`\>

#### Implementation of

[`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md).[`result`](../../../../types/ao/interfaces/AoCompositeProvider.md#result)

#### Defined in

[src/common/services/composite-provider.ts:56](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/composite-provider.ts#L56)

***

### state()

> **state**(`p`, `options`?): `Promise`\<`Memory`\>

#### Parameters

• **p**

• **p.processId**: `string`

• **options?**: [`AoEvaluationOptions`](../../../../types/ao/type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<`Memory`\>

#### Implementation of

[`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md).[`state`](../../../../types/ao/interfaces/AoCompositeProvider.md#state)

#### Defined in

[src/common/services/composite-provider.ts:63](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/composite-provider.ts#L63)

***

### unmonitor()

> **unmonitor**(`p`): `Promise`\<`string`\>

#### Parameters

• **p**: `Partial`\<`Pick`\<`DataItem`, `"tags"` \| `"data"` \| `"anchor"`\>\> & `object`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`AoCompositeProvider`](../../../../types/ao/interfaces/AoCompositeProvider.md).[`unmonitor`](../../../../types/ao/interfaces/AoCompositeProvider.md#unmonitor)

#### Defined in

[src/common/services/composite-provider.ts:89](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/composite-provider.ts#L89)
