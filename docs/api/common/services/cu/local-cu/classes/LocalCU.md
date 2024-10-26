[ao-sdk](../../../../../modules.md) / [common/services/cu/local-cu](../index.md) / LocalCU

# Class: LocalCU

## Implements

- [`AoCU`](../../../../../types/ao/interfaces/AoCU.md)

## Constructors

### new LocalCU()

> **new LocalCU**(): [`LocalCU`](LocalCU.md)

#### Returns

[`LocalCU`](LocalCU.md)

## Methods

### createHandler()

> **createHandler**(`p`): `Promise`\<`void`\>

#### Parameters

• **p**

• **p.memory**: `Memory`

• **p.processId**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

common/services/cu/local-cu.ts:5

***

### dryrun()

> **dryrun**(`p`, `options`?): `Promise`\<[`AoResult`](../../../../../types/ao/type-aliases/AoResult.md) & `object`\>

#### Parameters

• **p**

• **p.message**: `Partial`\<[`AoMessage`](../../../../../types/ao/type-aliases/AoMessage.md)\>

• **options?**: [`AoEvaluationOptions`](../../../../../types/ao/type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<[`AoResult`](../../../../../types/ao/type-aliases/AoResult.md) & `object`\>

#### Implementation of

[`AoCU`](../../../../../types/ao/interfaces/AoCU.md).[`dryrun`](../../../../../types/ao/interfaces/AoCU.md#dryrun)

#### Defined in

common/services/cu/local-cu.ts:6

***

### result()

> **result**(`p`, `options`?): `Promise`\<[`AoResult`](../../../../../types/ao/type-aliases/AoResult.md) & `object`\>

#### Parameters

• **p**

• **p.messageId**: `string`

• **options?**: [`AoEvaluationOptions`](../../../../../types/ao/type-aliases/AoEvaluationOptions.md)

#### Returns

`Promise`\<[`AoResult`](../../../../../types/ao/type-aliases/AoResult.md) & `object`\>

#### Implementation of

[`AoCU`](../../../../../types/ao/interfaces/AoCU.md).[`result`](../../../../../types/ao/interfaces/AoCU.md#result)

#### Defined in

common/services/cu/local-cu.ts:13
