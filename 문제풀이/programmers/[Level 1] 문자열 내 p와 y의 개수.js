const solution = (s) => {
  const counter = { p: 0, y: 0 };
  [...s].forEach((char) => counter[char.toLowerCase()]++);
  // 각 문자로 split해서 나온 배열 개수로 평가해도 됨
  return counter.p === counter.y;
};
