/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // 중복된 값은 패스
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let [left, right] = [i + 1, nums.length - 1];
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum < 0) left += 1;
      else if (sum > 0) right -= 1;
      else {
        result.push([nums[i], nums[left], nums[right]]);

        // 같은 값이 연속으로 있을 수 있으니 처리
        while (left < right && nums[left] === nums[left + 1]) left += 1;
        while (left < right && nums[right] === nums[right - 1]) right -= 1;

        left += 1;
        right -= 1;
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
console.log(threeSum([]));
console.log(threeSum([0]));
