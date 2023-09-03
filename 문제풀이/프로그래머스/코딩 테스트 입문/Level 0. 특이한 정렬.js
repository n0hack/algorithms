const solution = (nums, n) => {
  return nums
    .map((v, i) => [v, i, Math.abs(v - n)])
    .sort((a, b) => a[2] - b[2] || b[0] - a[0])
    .map((v) => v[0]);
};

console.log(solution([1, 2, 3, 4, 5, 6], 4));
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30));
