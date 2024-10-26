[ao-sdk](../../../../modules.md) / [common/services/composite-provider](../index.md) / AO

# Class: AO

## Implements

- `AoServiceProvider`

## Constructors

### new AO()

> **new AO**(`__namedParameters`): [`AO`](AO.md)

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.cu**: [`AoCU`](../../../../types/ao/interfaces/AoCU.md)

• **\_\_namedParameters.eventManager**: [`EventVacuum`](../../../events/event-vacuum/classes/EventVacuum.md)

• **\_\_namedParameters.mu**: [`AoMU`](../../../../types/ao/interfaces/AoMU.md)

• **\_\_namedParameters.su**: [`AoSU`](../../../../types/ao/interfaces/AoSU.md)

#### Returns

[`AO`](AO.md)

#### Defined in

common/services/composite-provider.ts:25

## Properties

### cu

> **cu**: [`AoCU`](../../../../types/ao/interfaces/AoCU.md)

#### Defined in

common/services/composite-provider.ts:19

***

### eventManager

> **eventManager**: [`EventVacuum`](../../../events/event-vacuum/classes/EventVacuum.md)

#### Defined in

common/services/composite-provider.ts:22

***

### memoryManager

> **memoryManager**: [`AoMemoryProvider`](../../../../types/ao/interfaces/AoMemoryProvider.md)

#### Defined in

common/services/composite-provider.ts:23

***

### mu

> **mu**: [`AoMU`](../../../../types/ao/interfaces/AoMU.md)

#### Defined in

common/services/composite-provider.ts:20

***

### su

> **su**: [`AoSU`](../../../../types/ao/interfaces/AoSU.md)

#### Defined in

common/services/composite-provider.ts:21

## Methods

### getProcessMessage()

> **getProcessMessage**(`p`): `Promise`\<[`AoSUMessageNode`](../../../../types/ao/type-aliases/AoSUMessageNode.md)\>

#### Parameters

• **p**

• **p.messageId**: `string`

• **p.processId**: `string`

#### Returns

`Promise`\<[`AoSUMessageNode`](../../../../types/ao/type-aliases/AoSUMessageNode.md)\>

#### Defined in

common/services/composite-provider.ts:53

***

### getProcessMessages()

> **getProcessMessages**(`p`): `Promise`\<[`AoSUPage`](../../../../types/ao/type-aliases/AoSUPage.md)\>

#### Parameters

• **p**

• **p.from?**: `number`

• **p.limit?**: `number`

• **p.processId**: `string`

• **p.to?**: `number`

#### Returns

`Promise`\<[`AoSUPage`](../../../../types/ao/type-aliases/AoSUPage.md)\>

#### Defined in

common/services/composite-provider.ts:44

***

### message()

> **message**(`p`, `options`?): `Promise`\<`string`\>

#### Parameters

• **p**

• **p.message**: `Partial`\<[`AoMessage`](../../../../types/ao/type-aliases/AoMessage.md)\>

• **p.signer?**: [`AoSigner`](../../../../types/ao/type-aliases/AoSigner.md)

• **options?**: [`AoEvaluationOptions`](../../../../types/ao/type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<`string`\>

#### Defined in

common/services/composite-provider.ts:60
