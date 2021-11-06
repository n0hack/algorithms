/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = (nums) => {
  nums = nums.sort((a, b) => a - b);
  return nums.filter((num, i) => i % 2 === 0).reduce((a, b) => a + b);
};
arrayPairSum([1, 4, 2, 3]);
console.log(arrayPairSum([6214, -2290, 2833, -7908]));
