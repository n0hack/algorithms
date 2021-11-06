/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length - 1; i++) {
    const sub = target - nums[i];
    const numsWithoutSub = nums.slice(i + 1);

    if (numsWithoutSub.includes(sub)) return [i, nums.indexOf(sub, i + 1)];
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 3], 6));
