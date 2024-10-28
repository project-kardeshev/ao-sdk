[ao-sdk](../../../../modules.md) / [common/services/http](../index.md) / AxiosHTTPService

# Class: AxiosHTTPService

## Implements

- [`HTTPClient`](../../../../types/http/interfaces/HTTPClient.md)

## Constructors

### new AxiosHTTPService()

> **new AxiosHTTPService**(`__namedParameters`): [`AxiosHTTPService`](AxiosHTTPService.md)

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.logger?**: [`ILogger`](../../../../utils/logger/interfaces/ILogger.md) = `Logger.default`

• **\_\_namedParameters.url**: `string`

#### Returns

[`AxiosHTTPService`](AxiosHTTPService.md)

#### Defined in

[src/common/services/http.ts:12](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/http.ts#L12)

## Methods

### delete()

> **delete**\<`I`, `K`\>(`__namedParameters`): `Promise`\<`K`\>

#### Type Parameters

• **I**

• **K**

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.allowedStatuses?**: `number`[] = `...`

• **\_\_namedParameters.data?**: `I`

• **\_\_namedParameters.endpoint**: `string`

• **\_\_namedParameters.headers?**: `Record`\<`string`, `string`\>

• **\_\_namedParameters.signal?**: `AbortSignal`

#### Returns

`Promise`\<`K`\>

#### Implementation of

[`HTTPClient`](../../../../types/http/interfaces/HTTPClient.md).[`delete`](../../../../types/http/interfaces/HTTPClient.md#delete)

#### Defined in

[src/common/services/http.ts:168](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/http.ts#L168)

***

### get()

> **get**\<`I`, `K`\>(`__namedParameters`): `Promise`\<`K`\>

#### Type Parameters

• **I**

• **K**

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.allowedStatuses?**: `number`[] = `...`

• **\_\_namedParameters.endpoint**: `string`

• **\_\_namedParameters.headers?**: `Record`\<`string`, `string`\>

• **\_\_namedParameters.params?**: `I`

• **\_\_namedParameters.signal?**: `AbortSignal`

#### Returns

`Promise`\<`K`\>

#### Implementation of

[`HTTPClient`](../../../../types/http/interfaces/HTTPClient.md).[`get`](../../../../types/http/interfaces/HTTPClient.md#get)

#### Defined in

[src/common/services/http.ts:27](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/http.ts#L27)

***

### head()

> **head**\<`I`, `K`\>(`__namedParameters`): `Promise`\<`K`\>

#### Type Parameters

• **I**

• **K**

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.allowedStatuses?**: `number`[]

• **\_\_namedParameters.data?**: `object` \| `I`

• **\_\_namedParameters.endpoint**: `string`

• **\_\_namedParameters.headers?**: `Record`\<`string`, `string`\>

• **\_\_namedParameters.signal?**: `AbortSignal`

#### Returns

`Promise`\<`K`\>

#### Implementation of

[`HTTPClient`](../../../../types/http/interfaces/HTTPClient.md).[`head`](../../../../types/http/interfaces/HTTPClient.md#head)

#### Defined in

[src/common/services/http.ts:216](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/http.ts#L216)

***

### post()

> **post**\<`I`, `K`\>(`__namedParameters`): `Promise`\<`K`\>

#### Type Parameters

• **I**

• **K**

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.allowedStatuses?**: `number`[] = `...`

• **\_\_namedParameters.data?**: `I`

• **\_\_namedParameters.endpoint**: `string`

• **\_\_namedParameters.headers?**: `Record`\<`string`, `string`\>

• **\_\_namedParameters.params?**: `I`

• **\_\_namedParameters.signal?**: `AbortSignal`

#### Returns

`Promise`\<`K`\>

#### Implementation of

[`HTTPClient`](../../../../types/http/interfaces/HTTPClient.md).[`post`](../../../../types/http/interfaces/HTTPClient.md#post)

#### Defined in

[src/common/services/http.ts:71](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/http.ts#L71)

***

### put()

> **put**\<`I`, `K`\>(`__namedParameters`): `Promise`\<`K`\>

#### Type Parameters

• **I**

• **K**

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.allowedStatuses?**: `number`[] = `...`

• **\_\_namedParameters.data?**: `I`

• **\_\_namedParameters.endpoint**: `string`

• **\_\_namedParameters.headers?**: `Record`\<`string`, `string`\>

• **\_\_namedParameters.signal?**: `AbortSignal`

#### Returns

`Promise`\<`K`\>

#### Implementation of

[`HTTPClient`](../../../../types/http/interfaces/HTTPClient.md).[`put`](../../../../types/http/interfaces/HTTPClient.md#put)

#### Defined in

[src/common/services/http.ts:121](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/services/http.ts#L121)
