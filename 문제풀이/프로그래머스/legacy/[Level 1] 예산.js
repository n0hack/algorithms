const solution = (d, budget) => {
  let result = 0;
  let money = 0;

  d.sort((a, b) => a - b).forEach((v) => {
    money += v;
    if (budget >= money) result++;
  });

  return result;
};

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
