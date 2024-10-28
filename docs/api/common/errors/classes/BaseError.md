[ao-sdk](../../../modules.md) / [common/errors](../index.md) / BaseError

# Class: BaseError

## Extends

- `Error`

## Extended by

- [`NotFound`](NotFound.md)
- [`BadRequest`](BadRequest.md)
- [`FailedRequestError`](FailedRequestError.md)
- [`UnknownError`](UnknownError.md)
- [`WriteInteractionError`](WriteInteractionError.md)
- [`InvalidSignerError`](InvalidSignerError.md)
- [`InvalidContractConfigurationError`](InvalidContractConfigurationError.md)
- [`InvalidProcessConfigurationError`](InvalidProcessConfigurationError.md)
- [`AbortError`](AbortError.md)

## Constructors

### new BaseError()

> **new BaseError**(`message`): [`BaseError`](BaseError.md)

#### Parameters

• **message**: `string`

#### Returns

[`BaseError`](BaseError.md)

#### Overrides

`Error.constructor`

#### Defined in

[src/common/errors.ts:2](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/errors.ts#L2)
