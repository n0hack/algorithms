// Runtime (152ms, 78.17%) / Memory (58.95MB, 70.05%)
// Two 포인터를 이용해 해결
import { test } from './utils/test';

function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // 중복이 있어서는 안 됨
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // 간격을 좁혀가며 계산
    let [left, right] = [i + 1, nums.length - 1];
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum < 0) {
        left += 1;
      } else if (sum > 0) {
        right -= 1;
      } else {
        result.push([nums[i], nums[left], nums[right]]);

        // 동일한 답에 대해 스킵 처리
        while (left < right && nums[left] === nums[left + 1]) left += 1;
        while (left < right && nums[right] === nums[right - 1]) right -= 1;

        left += 1;
        right -= 1;
      }
    }
  }

  return result;
}

test(() => threeSum([-1, 0, 1, 2, -1, -4]));
test(() => threeSum([0, 1, 1]));
test(() => threeSum([0, 0, 0]));
test(() => threeSum([-2, 0, 0, 2, 2]));
