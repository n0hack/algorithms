/* _____________ 여기에 코드 입력 _____________ */
type ReplaceKeys<U, T, Y> = {
  [K in keyof U]: K extends T ? (K extends keyof Y ? Y[K] : never) : U[K];
};

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type NodeA = {
  type: 'A';
  name: string;
  flag: number;
};

type NodeB = {
  type: 'B';
  id: number;
  flag: number;
};

type NodeC = {
  type: 'C';
  name: string;
  flag: number;
};

type ReplacedNodeA = {
  type: 'A';
  name: number;
  flag: string;
};

type ReplacedNodeB = {
  type: 'B';
  id: number;
  flag: string;
};

type ReplacedNodeC = {
  type: 'C';
  name: number;
  flag: string;
};

type NoNameNodeA = {
  type: 'A';
  flag: number;
  name: never;
};

type NoNameNodeC = {
  type: 'C';
  flag: number;
  name: never;
};

type Nodes = NodeA | NodeB | NodeC;
type ReplacedNodes = ReplacedNodeA | ReplacedNodeB | ReplacedNodeC;
type NodesNoName = NoNameNodeA | NoNameNodeC | NodeB;

type cases = [
  Expect<Equal<ReplaceKeys<Nodes, 'name' | 'flag', { name: number; flag: string }>, ReplacedNodes>>,
  Expect<Equal<ReplaceKeys<Nodes, 'name', { aa: number }>, NodesNoName>>
];

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/1130/answer/ko
  > 정답 보기: https://tsch.js.org/1130/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
