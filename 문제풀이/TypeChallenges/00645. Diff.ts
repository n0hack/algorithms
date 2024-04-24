/* _____________ 여기에 코드 입력 _____________ */
// type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>;

// keyof (O & O1) = name | age | gender
// keyof (O | O1) = name | age
type Diff<O, O1> = {
  [P in Exclude<keyof (O & O1), keyof (O | O1)>]: (O & O1)[P];
};

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>
];
