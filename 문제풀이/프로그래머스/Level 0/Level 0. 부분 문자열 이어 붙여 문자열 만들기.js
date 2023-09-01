const solution = (strings, parts) => {
  let res = '';

  for (let i = 0; i < parts.length; i++) {
    const [start, end] = parts[i];
    res += strings[i].slice(start, end + 1);
  }
  console.log(res);

  return res;
};

solution(
  ['progressive', 'hamburger', 'hammer', 'ahocorasick'],
  [
    [0, 4],
    [1, 2],
    [3, 5],
    [7, 7],
  ]
);
