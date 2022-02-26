const solution = (lottos, win_nums) => {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  const zero = lottos.filter((v) => !v).length;
  const low = lottos.filter((v) => win_nums.includes(v)).length;
  const high = low + zero;

  return [rank[high], rank[low]];
};

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]);
solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]);
