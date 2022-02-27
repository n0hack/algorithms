const solution = (lottos, win_nums) => {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  zero = lottos.filter((lotto) => lotto === 0).length;
  low = lottos.filter((lotto) => win_nums.includes(lotto)).length;

  // 0을 모두 당첨 숫자로 바꾸면 최고점이므로 low + zero = high
  return [rank[low + zero], rank[low]];
};

// prettier-ignore
const inputs = [
  [[44, 1, 0, 0, 31, 25],	[31, 10, 45, 1, 6, 19]],
  [[0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]],
  [[45, 4, 35, 20, 3, 9],	[20, 9, 3, 45, 4, 35]]
]
inputs.forEach((input) => console.log(solution(...input)));
