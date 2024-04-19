/* _____________ 여기에 코드 입력 _____________ */
type Chainable<T = {}> = {
  option<K extends string, V>(key: K extends keyof T ? never : K, value: V): Chainable<Omit<T, K> & Record<K, V>>;
  get(): T;
};

/* _____________ 테스트 케이스 _____________ */
import type { Alike, Expect } from '@type-challenges/utils';

declare const a: Chainable;

const result1 = a.option('foo', 123).option('bar', { value: 'Hello World' }).option('name', 'type-challenges').get();

const result2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get();

const result3 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 123)
  .get();

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>,
  Expect<Alike<typeof result3, Expected3>>
];

type Expected1 = {
  foo: number;
  bar: {
    value: string;
  };
  name: string;
};

type Expected2 = {
  name: string;
};

type Expected3 = {
  name: number;
};
