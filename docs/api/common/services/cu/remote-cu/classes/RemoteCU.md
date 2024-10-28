[ao-sdk](../../../../../modules.md) / [common/services/cu/remote-cu](../index.md) / RemoteCU

# Class: RemoteCU

## Implements

- [`AoCU`](../../../../../types/ao/interfaces/AoCU.md)

## Constructors

### new RemoteCU()

> **new RemoteCU**(`__namedParameters`): [`RemoteCU`](RemoteCU.md)

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.cuUrl**: `string`

• **\_\_namedParameters.http?**: [`HTTPClient`](../../../../../types/http/interfaces/HTTPClient.md) = `...`

#### Returns

[`RemoteCU`](RemoteCU.md)

#### Defined in

[src/common/services/cu/remote-cu.ts:14](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/cu/remote-cu.ts#L14)

## Properties

### cuUrl

> `readonly` **cuUrl**: `string`

#### Defined in

[src/common/services/cu/remote-cu.ts:11](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/cu/remote-cu.ts#L11)

## Methods

### dryrun()

> **dryrun**(`__namedParameters`, `options`?): `Promise`\<[`AoResult`](../../../../../types/ao/type-aliases/AoResult.md) & `object`\>

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.message**: `Partial`\<[`AoMessage`](../../../../../types/ao/type-aliases/AoMessage.md)\> & `object`

• **options?**: `Pick`\<[`AoEvaluationOptions`](../../../../../types/ao/type-aliases/AoEvaluationOptions.md), `"messageId"`\>

#### Returns

`Promise`\<[`AoResult`](../../../../../types/ao/type-aliases/AoResult.md) & `object`\>

#### Implementation of

[`AoCU`](../../../../../types/ao/interfaces/AoCU.md).[`dryrun`](../../../../../types/ao/interfaces/AoCU.md#dryrun)

#### Defined in

[src/common/services/cu/remote-cu.ts:24](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/cu/remote-cu.ts#L24)

***

### result()

> **result**(`__namedParameters`): `Promise`\<[`AoResult`](../../../../../types/ao/type-aliases/AoResult.md)\>

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.messageId**: `string`

• **\_\_namedParameters.processId**: `string`

#### Returns

`Promise`\<[`AoResult`](../../../../../types/ao/type-aliases/AoResult.md)\>

#### Implementation of

[`AoCU`](../../../../../types/ao/interfaces/AoCU.md).[`result`](../../../../../types/ao/interfaces/AoCU.md#result)

#### Defined in

[src/common/services/cu/remote-cu.ts:42](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/cu/remote-cu.ts#L42)

***

### state()

> **state**(`__namedParameters`, `options`?): `Promise`\<`Memory`\>

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.processId**: `string`

• **options?**: `Pick`\<[`AoEvaluationOptions`](../../../../../types/ao/type-aliases/AoEvaluationOptions.md), `"toTimestamp"`\>

#### Returns

`Promise`\<`Memory`\>

#### Implementation of

[`AoCU`](../../../../../types/ao/interfaces/AoCU.md).[`state`](../../../../../types/ao/interfaces/AoCU.md#state)

#### Defined in

[src/common/services/cu/remote-cu.ts:56](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/cu/remote-cu.ts#L56)
