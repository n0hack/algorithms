/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const findMedianSortedArrays = (nums1, nums2) => {
  nums1.push(nums2);
  nums1 = nums1.flat().sort((a, b) => Number(a) - Number(b));

  const [left, right] = Array.from({ length: 2 }, () => Math.floor(nums1.length / 2));

  if (nums1.length % 2) return nums1[left];
  else return (nums1[left - 1] + nums1[right]) / 2;
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([0, 0], [0, 0]));
