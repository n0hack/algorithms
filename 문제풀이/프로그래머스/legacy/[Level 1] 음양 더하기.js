const solution = (absolutes, signs) => {
  return absolutes.reduce((acc, cur, i) => {
    return signs[i] ? acc + cur : acc - cur;
  }, 0);
};
solution([4, 7, 12]);
