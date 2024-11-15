import * as wasmEdit from '@webassemblyjs/wasm-edit';
import * as wasmGen from '@webassemblyjs/wasm-gen';
import * as wasmParser from '@webassemblyjs/wasm-parser';
import { z } from 'zod';

import { AoMessage, AoSigner } from '../types/ao.js';
import { AoEvent } from '../types/events.js';

const { editWithAST } = wasmEdit;
const { encodeU32: encode } = wasmGen;
const { decode } = wasmParser;

export function findMessageByTag({
  messages,
  name,
  value,
}: {
  messages: AoMessage[];
  name: string;
  value?: string;
}): AoMessage | undefined {
  return messages.find((message) =>
    message.Tags?.find(
      // Find the first message that has a tag with th∂e given name and value - if no value is provided, just check the name
      (tag) => tag.name === name && (value ? tag.value === value : true),
    ),
  );
}

export function isAoSigner(value: unknown): value is AoSigner {
  const TagSchema = z.object({
    name: z.string(),
    value: z.union([z.string(), z.number()]),
  });

  const AoSignerSchema = z
    .function()
    .args(
      z.object({
        data: z.union([z.string(), z.instanceof(Buffer)]),
        tags: z.array(TagSchema).optional(),
        target: z.string().optional(),
        anchor: z.string().optional(),
      }),
    )
    .returns(
      z.promise(
        z.object({
          id: z.string(),
          raw: z.instanceof(ArrayBuffer),
        }),
      ),
    );
  try {
    AoSignerSchema.parse(value);
    return true;
  } catch {
    return false;
  }
}

export function isAoEvent(value: unknown): value is AoEvent {
  const AoEventSchema = z
    .object({
      _e: z.number(),
      sampleRate: z.number(),
      timestamp: z.string().optional(),
      Timestamp: z.string().optional(),
    })
    .passthrough();

  try {
    AoEventSchema.parse(value);
    return true;
  } catch {
    return false;
  }
}

export async function buildWasmModuleWithInjectedMemory({
  wasmBinary,
  memory,
}: {
  wasmBinary: Uint8Array;
  memory: WebAssembly.Memory;
}): Promise<Uint8Array> {
  // Extract the memory buffer as a Uint8Array
  const memoryBuffer = new Uint8Array(memory.buffer);

  // Parse the original binary using wasm-parser
  const ast = await decode(wasmBinary, {
    dump: false,
    ignoreCodeSection: false,
    ignoreDataSection: false,
  });

  // Modify the memory section in the binary to replace initial memory values
  await editWithAST(ast, wasmBinary, {
    onMemorySection(section) {
      console.log(section);
      // Replace the initial data in the memory section with the current memory state
      section.data = memoryBuffer;
    },
  });

  // Encode the modified AST back to a binary format
  const modifiedBinary = await encode(ast);

  return new Uint8Array(modifiedBinary);
}
