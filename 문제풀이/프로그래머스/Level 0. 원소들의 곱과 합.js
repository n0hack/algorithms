const solution = (nums) => {
  const squaredSum = nums.reduce((acc, cur) => acc + cur) ** 2;
  const mul = nums.reduce((acc, cur) => acc * cur);

  return squaredSum > mul ? 1 : 0;
};

console.log(solution([3, 4, 5, 2, 1]));
console.log(solution([5, 7, 8, 3]));
