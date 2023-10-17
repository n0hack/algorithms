// Runtime (56ms, 87.15%) / Memory (44.79MB, 58.74%)
// Hash Table을 이용해 해결
import { test } from './utils/test';

function twoSum(nums: number[], target: number): number[] {
  const map = nums.reduce((obj, num, i) => {
    obj[num] = i;
    return obj;
  }, {} as Record<number, number>);

  for (let i = 0; i < nums.length; i++) {
    const sub = target - nums[i];
    if (sub in map && map[sub] !== i) return [i, map[sub]];
  }

  return [];
}

test(() => twoSum([2, 7, 11, 15], 9));
test(() => twoSum([3, 2, 4], 6));
test(() => twoSum([3, 3], 6));
