[ao-sdk](../../../modules.md) / [utils/token](../index.md) / PositiveFiniteInteger

# Class: PositiveFiniteInteger

## Extended by

- [`mToken`](mToken.md)

## Implements

- [`Equatable`](../interfaces/Equatable.md)\<[`PositiveFiniteInteger`](PositiveFiniteInteger.md)\>

## Constructors

### new PositiveFiniteInteger()

> **new PositiveFiniteInteger**(`positiveFiniteInteger`): [`PositiveFiniteInteger`](PositiveFiniteInteger.md)

#### Parameters

• **positiveFiniteInteger**: `number`

#### Returns

[`PositiveFiniteInteger`](PositiveFiniteInteger.md)

#### Defined in

[utils/token.ts:6](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L6)

## Methods

### \[toPrimitive\]()

> **\[toPrimitive\]**(`hint`?): `string` \| `number`

#### Parameters

• **hint?**: `string`

#### Returns

`string` \| `number`

#### Defined in

[utils/token.ts:18](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L18)

***

### equals()

> **equals**(`other`): `boolean`

#### Parameters

• **other**: [`PositiveFiniteInteger`](PositiveFiniteInteger.md)

#### Returns

`boolean`

#### Implementation of

[`Equatable`](../interfaces/Equatable.md).[`equals`](../interfaces/Equatable.md#equals)

#### Defined in

[utils/token.ts:76](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L76)

***

### isGreaterThan()

> **isGreaterThan**(`positiveFiniteInteger`): `boolean`

#### Parameters

• **positiveFiniteInteger**: [`PositiveFiniteInteger`](PositiveFiniteInteger.md)

#### Returns

`boolean`

#### Defined in

[utils/token.ts:38](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L38)

***

### isGreaterThanOrEqualTo()

> **isGreaterThanOrEqualTo**(`positiveFiniteInteger`): `boolean`

#### Parameters

• **positiveFiniteInteger**: [`PositiveFiniteInteger`](PositiveFiniteInteger.md)

#### Returns

`boolean`

#### Defined in

[utils/token.ts:44](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L44)

***

### isLessThan()

> **isLessThan**(`positiveFiniteInteger`): `boolean`

#### Parameters

• **positiveFiniteInteger**: [`PositiveFiniteInteger`](PositiveFiniteInteger.md)

#### Returns

`boolean`

#### Defined in

[utils/token.ts:52](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L52)

***

### isLessThanOrEqualTo()

> **isLessThanOrEqualTo**(`positiveFiniteInteger`): `boolean`

#### Parameters

• **positiveFiniteInteger**: [`PositiveFiniteInteger`](PositiveFiniteInteger.md)

#### Returns

`boolean`

#### Defined in

[utils/token.ts:58](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L58)

***

### minus()

> **minus**(`positiveFiniteInteger`): [`PositiveFiniteInteger`](PositiveFiniteInteger.md)

#### Parameters

• **positiveFiniteInteger**: [`PositiveFiniteInteger`](PositiveFiniteInteger.md)

#### Returns

[`PositiveFiniteInteger`](PositiveFiniteInteger.md)

#### Defined in

[utils/token.ts:32](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L32)

***

### plus()

> **plus**(`positiveFiniteInteger`): [`PositiveFiniteInteger`](PositiveFiniteInteger.md)

#### Parameters

• **positiveFiniteInteger**: [`PositiveFiniteInteger`](PositiveFiniteInteger.md)

#### Returns

[`PositiveFiniteInteger`](PositiveFiniteInteger.md)

#### Defined in

[utils/token.ts:26](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L26)

***

### toJSON()

> **toJSON**(): `number`

#### Returns

`number`

#### Defined in

[utils/token.ts:72](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L72)

***

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Defined in

[utils/token.ts:64](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L64)

***

### valueOf()

> **valueOf**(): `number`

Returns the primitive value of the specified object.

#### Returns

`number`

#### Defined in

[utils/token.ts:68](https://github.com/project-kardeshev/ao-sdk/blob/ff365e0a40fc954f8890beb5ffc99c09f4aa6765/src/utils/token.ts#L68)
