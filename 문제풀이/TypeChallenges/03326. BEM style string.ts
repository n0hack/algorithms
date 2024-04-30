/* _____________ 여기에 코드 입력 _____________ */
type NoElement<T extends string[]> = T[number] extends undefined ? '' : `__${T[number]}`;

type NoModifier<T extends string[]> = T[number] extends undefined ? '' : `--${T[number]}`;

type BEM<B extends string, E extends string[], M extends string[]> = `${B}${NoElement<E>}${NoModifier<M>}`;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success'>>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large'>>
];
