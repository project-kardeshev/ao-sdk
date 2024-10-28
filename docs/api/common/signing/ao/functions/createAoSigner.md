[ao-sdk](../../../../modules.md) / [common/signing/ao](../index.md) / createAoSigner

# Function: createAoSigner()

> **createAoSigner**(`signer`): [`AoSigner`](../../../../types/ao/type-aliases/AoSigner.md)

A function that creates an AoSigner from a DataItemSignatureProvider

## Parameters

• **signer**: [`DataItemSignatureProvider`](../../../../types/ao/type-aliases/DataItemSignatureProvider.md)

The signer to be converted

## Returns

[`AoSigner`](../../../../types/ao/type-aliases/AoSigner.md)

- The AoSigner

## Example

```ts
const signer = createAoSigner(wallet)
```

## Defined in

[src/common/signing/ao.ts:90](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/common/signing/ao.ts#L90)
