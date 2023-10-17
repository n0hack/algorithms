import { test } from './utils/test';

const containsDuplicate = (nums: number[]): boolean => {
  return nums.length !== [...new Set(nums)].length;
};

test(() => containsDuplicate([1, 2, 3, 1]));
test(() => containsDuplicate([1, 2, 3, 4]));
test(() => containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
