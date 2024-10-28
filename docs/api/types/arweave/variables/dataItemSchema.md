[ao-sdk](../../../modules.md) / [types/arweave](../index.md) / dataItemSchema

# Variable: dataItemSchema

> `const` **dataItemSchema**: `ZodObject`\<`object`, `"passthrough"`, `ZodTypeAny`, `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\>, `objectInputType`\<`object`, `ZodTypeAny`, `"passthrough"`\>\>

## Type declaration

### anchor

> **anchor**: `ZodOptional`\<`ZodString`\>

### data

> **data**: `ZodUnion`\<[`ZodString`, `ZodNumber`, `ZodEffects`\<`ZodUnknown`, `Buffer`, `unknown`\>]\>

### tags

> **tags**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

### target

> **target**: `ZodOptional`\<`ZodString`\>

## Defined in

[src/types/arweave.ts:13](https://github.com/project-kardeshev/ao-sdk/blob/6a8c7756719f98a5b02b986a71bc38b82aac5da1/src/types/arweave.ts#L13)
