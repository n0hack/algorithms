// Runtime (105ms, 49.59%) / Memory (48.57MB, 70.25%)
import { test } from './utils/test';

function arrayPairSum(nums: number[]): number {
  nums = nums.sort((a, b) => a - b);
  return nums.reduce((acc, num, i) => (i % 2 ? acc : acc + num), 0);
}

test(() => arrayPairSum([1, 4, 3, 2]));
test(() => arrayPairSum([6, 2, 6, 5, 1, 2]));
