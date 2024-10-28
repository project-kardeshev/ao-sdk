[ao-sdk](../../../modules.md) / [types/http](../index.md) / HTTPClient

# Interface: HTTPClient

## Methods

### delete()

> **delete**\<`I`, `K`\>(`__namedParameters`): `Promise`\<`K`\>

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

#### Defined in

[src/types/http.ts:46](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/http.ts#L46)

***

### get()

> **get**\<`I`, `K`\>(`__namedParameters`): `Promise`\<`K`\>

#### Type Parameters

• **I**

• **K**

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.allowedStatuses?**: `number`[]

• **\_\_namedParameters.endpoint**: `string`

• **\_\_namedParameters.headers?**: `Record`\<`string`, `string`\>

• **\_\_namedParameters.params?**: `object` \| `I`

• **\_\_namedParameters.signal?**: `AbortSignal`

#### Returns

`Promise`\<`K`\>

#### Defined in

[src/types/http.ts:2](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/http.ts#L2)

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

#### Defined in

[src/types/http.ts:59](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/http.ts#L59)

***

### post()

> **post**\<`I`, `K`\>(`__namedParameters`): `Promise`\<`K`\>

#### Type Parameters

• **I**

• **K**

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.allowedStatuses?**: `number`[]

• **\_\_namedParameters.data?**: `object` \| `I`

• **\_\_namedParameters.endpoint**: `string`

• **\_\_namedParameters.headers?**: `Record`\<`string`, `string`\>

• **\_\_namedParameters.params?**: `object` \| `I`

• **\_\_namedParameters.signal?**: `AbortSignal`

#### Returns

`Promise`\<`K`\>

#### Defined in

[src/types/http.ts:16](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/http.ts#L16)

***

### put()

> **put**\<`I`, `K`\>(`__namedParameters`): `Promise`\<`K`\>

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

#### Defined in

[src/types/http.ts:32](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/http.ts#L32)
