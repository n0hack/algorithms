/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     let temp = target - nums[i];
//     let find = nums.findIndex((num, j) => num === temp && i !== j);
//     if (find !== -1) return [i, find];
//   }
//   // for (let i = 0; i < nums.length - 1; i++) {
//   //   for (let j = i + 1; j < nums.length; j++) {
//   //     if (nums[i] + nums[j] === target) return [i, j];
//   //   }
//   // }
// };

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
