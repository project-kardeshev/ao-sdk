[ao-sdk](../../../../modules.md) / [common/signing/ao](../index.md) / createArweaveApiDataItemSigner

# Function: createArweaveApiDataItemSigner()

> **createArweaveApiDataItemSigner**(`arweaveWallet`): [`AoSigner`](../../../../types/ao/type-aliases/AoSigner.md)

A function that builds a signer using the global arweaveWallet
commonly used in browser-based dApps

This is provided as a convenience for consumers of the SDK
to use, but consumers can also implement their own signer

## Parameters

• **arweaveWallet**

The window.arweaveWallet object

## Returns

[`AoSigner`](../../../../types/ao/type-aliases/AoSigner.md)

- The signer function

## Example

```ts
const signer = createArweaveApiDataItemSigner(window.arweaveWallet)
```

## Defined in

[src/common/signing/ao.ts:51](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/signing/ao.ts#L51)
