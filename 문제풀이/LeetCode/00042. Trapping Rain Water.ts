// Runtime (61ms, 72.74%) / Memory (45.35MB, 54.40%)
// Two 포인터를 이용해, 좌우 높이차를 계산하여 해결
import { test } from './utils/test';

function trap(height: number[]): number {
  if (height.length === 0) return 0;

  let [left, right] = [0, height.length - 1];
  let [leftMax, rightMax] = [height[left], height[right]];
  let result = 0;

  while (left < right) {
    [leftMax, rightMax] = [Math.max(leftMax, height[left]), Math.max(rightMax, height[right])];

    if (leftMax <= rightMax) {
      result += leftMax - height[left];
      left++;
    } else {
      result += rightMax - height[right];
      right--;
    }
  }

  return result;
}

test(() => trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
test(() => trap([4, 2, 0, 3, 2, 5]));
