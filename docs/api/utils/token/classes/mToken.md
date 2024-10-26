[ao-sdk](../../../modules.md) / [utils/token](../index.md) / mToken

# Class: mToken

## Extends

- [`PositiveFiniteInteger`](PositiveFiniteInteger.md)

## Constructors

### new mToken()

> **new mToken**(`value`, `denomination`): [`mToken`](mToken.md)

#### Parameters

• **value**: `number`

• **denomination**: `string` \| `number`

#### Returns

[`mToken`](mToken.md)

#### Overrides

[`PositiveFiniteInteger`](PositiveFiniteInteger.md).[`constructor`](PositiveFiniteInteger.md#constructors)

#### Defined in

[utils/token.ts:110](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L110)

## Properties

### denomination

> `protected` **denomination**: `number`

#### Defined in

[utils/token.ts:109](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L109)

## Methods

### \[toPrimitive\]()

> **\[toPrimitive\]**(`hint`?): `string` \| `number`

#### Parameters

• **hint?**: `string`

#### Returns

`string` \| `number`

#### Inherited from

[`PositiveFiniteInteger`](PositiveFiniteInteger.md).[`[toPrimitive]`](PositiveFiniteInteger.md#%5Btoprimitive%5D)

#### Defined in

[utils/token.ts:18](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L18)

***

### divide()

> **divide**(`divisor`): [`mToken`](mToken.md)

#### Parameters

• **divisor**: `number` \| [`mToken`](mToken.md)

#### Returns

[`mToken`](mToken.md)

#### Defined in

[utils/token.ts:121](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L121)

***

### equals()

> **equals**(`other`): `boolean`

#### Parameters

• **other**: [`PositiveFiniteInteger`](PositiveFiniteInteger.md)

#### Returns

`boolean`

#### Inherited from

[`PositiveFiniteInteger`](PositiveFiniteInteger.md).[`equals`](PositiveFiniteInteger.md#equals)

#### Defined in

[utils/token.ts:76](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L76)

***

### isGreaterThan()

> **isGreaterThan**(`positiveFiniteInteger`): `boolean`

#### Parameters

• **positiveFiniteInteger**: [`PositiveFiniteInteger`](PositiveFiniteInteger.md)

#### Returns

`boolean`

#### Inherited from

[`PositiveFiniteInteger`](PositiveFiniteInteger.md).[`isGreaterThan`](PositiveFiniteInteger.md#isgreaterthan)

#### Defined in

[utils/token.ts:38](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L38)

***

### isGreaterThanOrEqualTo()

> **isGreaterThanOrEqualTo**(`positiveFiniteInteger`): `boolean`

#### Parameters

• **positiveFiniteInteger**: [`PositiveFiniteInteger`](PositiveFiniteInteger.md)

#### Returns

`boolean`

#### Inherited from

[`PositiveFiniteInteger`](PositiveFiniteInteger.md).[`isGreaterThanOrEqualTo`](PositiveFiniteInteger.md#isgreaterthanorequalto)

#### Defined in

[utils/token.ts:44](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L44)

***

### isLessThan()

> **isLessThan**(`positiveFiniteInteger`): `boolean`

#### Parameters

• **positiveFiniteInteger**: [`PositiveFiniteInteger`](PositiveFiniteInteger.md)

#### Returns

`boolean`

#### Inherited from

[`PositiveFiniteInteger`](PositiveFiniteInteger.md).[`isLessThan`](PositiveFiniteInteger.md#islessthan)

#### Defined in

[utils/token.ts:52](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L52)

***

### isLessThanOrEqualTo()

> **isLessThanOrEqualTo**(`positiveFiniteInteger`): `boolean`

#### Parameters

• **positiveFiniteInteger**: [`PositiveFiniteInteger`](PositiveFiniteInteger.md)

#### Returns

`boolean`

#### Inherited from

[`PositiveFiniteInteger`](PositiveFiniteInteger.md).[`isLessThanOrEqualTo`](PositiveFiniteInteger.md#islessthanorequalto)

#### Defined in

[utils/token.ts:58](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L58)

***

### minus()

> **minus**(`subtractHend`): [`mToken`](mToken.md)

#### Parameters

• **subtractHend**: [`mToken`](mToken.md)

#### Returns

[`mToken`](mToken.md)

#### Overrides

[`PositiveFiniteInteger`](PositiveFiniteInteger.md).[`minus`](PositiveFiniteInteger.md#minus)

#### Defined in

[utils/token.ts:136](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L136)

***

### multiply()

> **multiply**(`multiplier`): [`mToken`](mToken.md)

#### Parameters

• **multiplier**: `number` \| [`mToken`](mToken.md)

#### Returns

[`mToken`](mToken.md)

#### Defined in

[utils/token.ts:115](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L115)

***

### plus()

> **plus**(`addend`): [`mToken`](mToken.md)

#### Parameters

• **addend**: [`mToken`](mToken.md)

#### Returns

[`mToken`](mToken.md)

#### Overrides

[`PositiveFiniteInteger`](PositiveFiniteInteger.md).[`plus`](PositiveFiniteInteger.md#plus)

#### Defined in

[utils/token.ts:131](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L131)

***

### toJSON()

> **toJSON**(): `number`

#### Returns

`number`

#### Inherited from

[`PositiveFiniteInteger`](PositiveFiniteInteger.md).[`toJSON`](PositiveFiniteInteger.md#tojson)

#### Defined in

[utils/token.ts:72](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L72)

***

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

[`PositiveFiniteInteger`](PositiveFiniteInteger.md).[`toString`](PositiveFiniteInteger.md#tostring)

#### Defined in

[utils/token.ts:64](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L64)

***

### toToken()

> **toToken**(): [`Token`](Token.md)

#### Returns

[`Token`](Token.md)

#### Defined in

[utils/token.ts:141](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L141)

***

### valueOf()

> **valueOf**(): `number`

Returns the primitive value of the specified object.

#### Returns

`number`

#### Inherited from

[`PositiveFiniteInteger`](PositiveFiniteInteger.md).[`valueOf`](PositiveFiniteInteger.md#valueof)

#### Defined in

[utils/token.ts:68](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L68)
