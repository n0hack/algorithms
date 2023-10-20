// Runtime (60ms, 41.03%) / Memory (43.95MB, 82.62%)
import { test } from './utils/test';

function numJewelsInStones(jewels: string, stones: string): number {
  let res = 0;
  for (const stone of [...stones]) {
    if (jewels.includes(stone)) res++;
  }
  return res;
}

test(() => numJewelsInStones('aA', 'aAAbbbb'));
test(() => numJewelsInStones('z', 'ZZ'));
