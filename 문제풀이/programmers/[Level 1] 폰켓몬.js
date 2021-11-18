const solution = (nums) => {
  const arr = [...new Set(nums)];
  const max = nums.length / 2;

  return arr.length > max ? max : arr.length;
};

solution([3, 1, 2, 3]);
solution([3, 3, 3, 2, 2, 4]);
solution([3, 3, 3, 2, 2, 2]);
