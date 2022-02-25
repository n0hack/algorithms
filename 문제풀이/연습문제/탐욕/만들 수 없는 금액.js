const solution = (n, coins) => {
  coins.sort((a, b) => a - b);

  let target = 1;
  for (const coin of coins) {
    if (target < coin) break;
    target += coin;
  }

  return target;
};

const inputs = [
  [5, [3, 2, 1, 1, 9]],
  [3, [3, 5, 7]],
];
inputs.forEach((input) => console.log(solution(...input)));
