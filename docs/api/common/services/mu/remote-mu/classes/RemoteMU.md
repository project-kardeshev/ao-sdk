[ao-sdk](../../../../../modules.md) / [common/services/mu/remote-mu](../index.md) / RemoteMU

# Class: RemoteMU

## Implements

- [`AoMU`](../../../../../types/ao/interfaces/AoMU.md)

## Constructors

### new RemoteMU()

> **new RemoteMU**(`__namedParameters`): [`RemoteMU`](RemoteMU.md)

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.http?**: [`HTTPClient`](../../../../../types/http/interfaces/HTTPClient.md) = `...`

• **\_\_namedParameters.muUrl**: `string`

#### Returns

[`RemoteMU`](RemoteMU.md)

#### Defined in

[src/common/services/mu/remote-mu.ts:9](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/mu/remote-mu.ts#L9)

## Properties

### muUrl

> `readonly` **muUrl**: `string`

#### Defined in

[src/common/services/mu/remote-mu.ts:6](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/mu/remote-mu.ts#L6)

## Methods

### message()

> **message**(`__namedParameters`): `Promise`\<`string`\>

#### Parameters

• **\_\_namedParameters**: `Partial`\<`Pick`\<`DataItem`, `"tags"` \| `"data"` \| `"anchor"`\>\> & `object`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`AoMU`](../../../../../types/ao/interfaces/AoMU.md).[`message`](../../../../../types/ao/interfaces/AoMU.md#message)

#### Defined in

[src/common/services/mu/remote-mu.ts:20](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/mu/remote-mu.ts#L20)

***

### monitor()

> **monitor**(`__namedParameters`): `Promise`\<`string`\>

#### Parameters

• **\_\_namedParameters**: `Partial`\<`Pick`\<`DataItem`, `"tags"` \| `"data"` \| `"anchor"`\>\> & `object`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`AoMU`](../../../../../types/ao/interfaces/AoMU.md).[`monitor`](../../../../../types/ao/interfaces/AoMU.md#monitor)

#### Defined in

[src/common/services/mu/remote-mu.ts:41](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/mu/remote-mu.ts#L41)

***

### unmonitor()

> **unmonitor**(`__namedParameters`): `Promise`\<`string`\>

#### Parameters

• **\_\_namedParameters**: `Partial`\<`Pick`\<`DataItem`, `"tags"` \| `"data"` \| `"anchor"`\>\> & `object`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`AoMU`](../../../../../types/ao/interfaces/AoMU.md).[`unmonitor`](../../../../../types/ao/interfaces/AoMU.md#unmonitor)

#### Defined in

[src/common/services/mu/remote-mu.ts:62](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/mu/remote-mu.ts#L62)
