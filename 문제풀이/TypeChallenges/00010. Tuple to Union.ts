/* _____________ 여기에 코드 입력 _____________ */
// type TupleToUnion<T extends unknown[]> = T extends [infer First, ...infer Rest]
//   ? First extends never
//     ? never
//     : First | TupleToUnion<Rest>
//   : never;

type TupleToUnion<T> = T extends Array<infer Item> ? Item : never;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];
