/**
 * @param {number[]} nums 숫자가 담긴 배열
 * @param {number} target 조합을 통해 만들고자 하는 값
 * @param {number} index
 * @param {number} currentSum
 */
const countWays = (nums, target, index = 0, currentSum = 0) => {
  // 모든 숫자를 다 사용한 경우
  if (index === nums.length) {
    return currentSum === target ? 1 : 0;
  }

  // 현재 숫자에 대해 +를 적용한 경우와 -를 적용한 경우를 각각 계산
  const add = countWays(nums, target, index + 1, currentSum + nums[index]);
  const sub = countWays(nums, target, index + 1, currentSum - nums[index]);

  return add + sub;
};

const nums = [1, 1, 1, 1];
const target = 0;

const result = countWays(nums, target);
console.log(result);
