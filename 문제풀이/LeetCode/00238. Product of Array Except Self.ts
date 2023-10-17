// Runtime (82ms, 86.44%) / Memory (56.38MB, 23.88%)
// 자기자신을 제외한 왼쪽의 곱과 오른쪽의 곱을 더하는 식으로 해결
import { test } from './utils/test';

function productExceptSelf(nums: number[]): number[] {
  const out = [];
  let p = 1;

  for (let i = 0; i < nums.length; i++) {
    out.push(p);
    p = p * nums[i];
  }

  p = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    out[i] = out[i] * p;
    p = p * nums[i];
  }

  return out;
}

test(() => productExceptSelf([1, 2, 3, 4]));
test(() => productExceptSelf([-1, 1, 0, -3, 3]));
