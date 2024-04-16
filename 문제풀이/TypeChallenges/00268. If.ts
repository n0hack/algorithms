/* _____________ 여기에 코드 입력 _____________ */
type If<C extends boolean, T, F> = C extends true ? T : F;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [Expect<Equal<If<true, 'a', 'b'>, 'a'>>, Expect<Equal<If<false, 'a', 2>, 2>>];

// @ts-expect-error
type error = If<null, 'a', 'b'>;
