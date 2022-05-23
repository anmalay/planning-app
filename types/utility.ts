export interface Newable<T = unknown> extends Function {
  new (...args: unknown[]): T;
}

export type Primitive = string | number | Record<string, unknown> | boolean;

export type UnpackedArray<T> = T extends Array<infer U> ? U : T;

export type DeepGet<T extends string, O> = T extends `${infer A}.${infer B}`
  ? A extends keyof O
    ? DeepGet<B, O[A]>
    : never
  : T extends keyof O
  ? O[T]
  : never;

export type GlueToPath<K0 extends string, K1 extends string> = `${K0}${K1 extends ''
  ? ''
  : '.'}${K1}`;

export type DeepKeys<O> = O extends Record<string, unknown>
  ? {
      [K in keyof O]: O[K] extends Array<unknown>
        ? `${K & string}`
        : `${K & string}` | GlueToPath<K & string, DeepKeys<O[K]>>;
    }[keyof O]
  : '';

export type DeepKeysFiltered<
  Union extends string,
  Dict extends Record<string, unknown>,
  FilterType = string,
> = {
  [K in Union]: DeepGet<K, Dict> extends FilterType ? K : never;
}[Union];

export type ObjectAlias = { [p: string]: any };

// Госпаде, что это вапще такое....
