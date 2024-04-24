/* _____________ 여기에 코드 입력 _____________ */
type Merge<F, S> = {
  [P in keyof F | keyof S]: P extends keyof S ? S[P] : P extends keyof F ? F[P] : never;
};

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number;
        b: number;
        c: boolean;
      }
    >
  >
];
