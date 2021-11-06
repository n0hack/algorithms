/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  const result = [];
  let p = 1;
  for (let i = 0; i < nums.length; i++) {
    result.push(p);
    p *= nums[i];
  }

  p = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= p;
    p *= nums[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
