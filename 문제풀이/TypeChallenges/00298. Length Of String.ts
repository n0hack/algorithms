/* _____________ 여기에 코드 입력 _____________ */
type LengthOfString<S extends string, T extends string[] = []> = S extends `${string}${infer R}`
  ? LengthOfString<R, [...T, string]>
  : T['length'];

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>
];
