[ao-sdk](../../../../modules.md) / [common/signing/ao](../index.md) / createArbundlesDataItemSigner

# Function: createArbundlesDataItemSigner()

> **createArbundlesDataItemSigner**(`wallet`): [`AoSigner`](../../../../types/ao/type-aliases/AoSigner.md)

A function that builds a signer using a Signer interface from arbundles
commonly used in node-based dApps

This is provided as a convenience for consumers of the SDK
to use, but consumers can also implement their own signer

## Parameters

• **wallet**: `Signer`

The arbundles Signer instance

## Returns

[`AoSigner`](../../../../types/ao/type-aliases/AoSigner.md)

## Example

```ts
const signer = createArbundlesDataItemSigner(wallet)
```

## Defined in

[src/common/signing/ao.ts:24](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/signing/ao.ts#L24)
