// Runtime (69ms, 61.37%) / Memory (44.71MB, 97.43%)
import { test } from './utils/test';

function topKFrequent(nums: number[], k: number): number[] {
  if (nums.length <= 1) return nums;

  const hash: Record<number, number> = {};

  for (const num of nums) {
    if (hash[num] === undefined) hash[num] = 1;
    else hash[num]++;
  }

  return Object.entries(hash)
    .sort((a, b) => b[1] - a[1])
    .map((v) => +v[0])
    .slice(0, k);
}

test(() => topKFrequent([1, 1, 1, 2, 2, 3], 2));
test(() => topKFrequent([1], 1));
