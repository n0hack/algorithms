import { test } from './utils/test';

const climbStairs = (n: number): number => {
  if (n <= 2) return n;

  let x = 1;
  let y = 2;
  let z = x + y;

  for (let i = 0; i < n - 3; i++) {
    x = y;
    y = z;
    z = x + y;
  }

  return z;
};

test(() => climbStairs(2));
test(() => climbStairs(3));
