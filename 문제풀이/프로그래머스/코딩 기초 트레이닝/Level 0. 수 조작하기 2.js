const solution = (log) => {
  const table = {
    1: 'w',
    '-1': 's',
    10: 'd',
    '-10': 'a',
  };
  let res = '';

  for (let i = 0; i < log.length - 1; i++) {
    res += table[log[i + 1] - log[i]];
  }

  return res;
};

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));
