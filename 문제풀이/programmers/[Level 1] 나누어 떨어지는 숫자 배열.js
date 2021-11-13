const solution = (arr, divisor) => {
  const answer = arr.filter((item) => item % divisor === 0).sort((a, b) => a - b);
  return answer.length ? answer : [-1];
};

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([3, 2, 6], 10));
