import { z } from 'zod';

export declare const tagSchema: z.ZodObject<
  {
    name: z.ZodString;
    value: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
  },
  'strip',
  z.ZodTypeAny,
  {
    name: string;
    value: string | number;
  },
  {
    name: string;
    value: string | number;
  }
>;
export declare const bufferSchema: z.ZodEffects<z.ZodUnknown, Buffer, unknown>;
export declare const dataItemSchema: z.ZodObject<
  {
    tags: z.ZodArray<
      z.ZodObject<
        {
          name: z.ZodString;
          value: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
        },
        'strip',
        z.ZodTypeAny,
        {
          name: string;
          value: string | number;
        },
        {
          name: string;
          value: string | number;
        }
      >,
      'many'
    >;
    data: z.ZodUnion<
      [z.ZodString, z.ZodNumber, z.ZodEffects<z.ZodUnknown, Buffer, unknown>]
    >;
    target: z.ZodOptional<z.ZodString>;
    anchor: z.ZodOptional<z.ZodString>;
  },
  'passthrough',
  z.ZodTypeAny,
  z.objectOutputType<
    {
      tags: z.ZodArray<
        z.ZodObject<
          {
            name: z.ZodString;
            value: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
          },
          'strip',
          z.ZodTypeAny,
          {
            name: string;
            value: string | number;
          },
          {
            name: string;
            value: string | number;
          }
        >,
        'many'
      >;
      data: z.ZodUnion<
        [z.ZodString, z.ZodNumber, z.ZodEffects<z.ZodUnknown, Buffer, unknown>]
      >;
      target: z.ZodOptional<z.ZodString>;
      anchor: z.ZodOptional<z.ZodString>;
    },
    z.ZodTypeAny,
    'passthrough'
  >,
  z.objectInputType<
    {
      tags: z.ZodArray<
        z.ZodObject<
          {
            name: z.ZodString;
            value: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
          },
          'strip',
          z.ZodTypeAny,
          {
            name: string;
            value: string | number;
          },
          {
            name: string;
            value: string | number;
          }
        >,
        'many'
      >;
      data: z.ZodUnion<
        [z.ZodString, z.ZodNumber, z.ZodEffects<z.ZodUnknown, Buffer, unknown>]
      >;
      target: z.ZodOptional<z.ZodString>;
      anchor: z.ZodOptional<z.ZodString>;
    },
    z.ZodTypeAny,
    'passthrough'
  >
>;
