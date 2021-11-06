/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
  const stack = [];
  let volume = 0;

  for (let i = 0; i < height.length; i++) {
    while (stack && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop();

      if (stack.length === 0) break;

      const dist = i - stack[stack.length - 1] - 1;
      const water = Math.min(height[i], height[stack[stack.length - 1]]) - height[top];

      volume += dist * water;
    }
    stack.push(i);
  }
  return volume;

  // // 높이가 없는 경우
  // if (!height) return 0;

  // let volume = 0;
  // let [left, right] = [0, height.length - 1];
  // let [leftMax, rightMax] = [height[left], height[right]];

  // while (left < right) {
  //   [leftMax, rightMax] = [Math.max(height[left], leftMax), Math.max(height[right], rightMax)];

  //   if (leftMax <= rightMax) {
  //     volume += leftMax - height[left];
  //     left++;
  //   } else {
  //     volume += rightMax - height[right];
  //     right--;
  //   }
  // }
  // return volume;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
