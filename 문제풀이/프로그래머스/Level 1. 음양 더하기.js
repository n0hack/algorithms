const solution = (absolutes, signs) => {
  // prettier-ignore
  return absolutes.reduce((pre, cur, i) => {
    return pre + (signs[i]? cur : -cur);
  }, 0);
};

// prettier-ignore
const inputs = [
  // [absolutes, signs]
  [[4, 7, 12], [true, false, true]],
  [[1, 2, 3], [false, false, true]],
];
inputs.forEach((input) => console.log(solution(...input)));
