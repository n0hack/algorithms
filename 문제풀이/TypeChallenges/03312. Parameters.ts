/* _____________ 여기에 코드 입력 _____________ */
type MyParameters<T extends (...args: any[]) => void> = T extends (...args: infer R) => void ? R : never;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

function foo(arg1: string, arg2: number): void {}
function bar(arg1: boolean, arg2: { a: 'A' }): void {}
function baz(): void {}

type T = MyParameters<typeof foo>;

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>
];
