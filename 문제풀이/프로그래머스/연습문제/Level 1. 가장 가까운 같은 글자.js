const solution = (s) => {
  const hash = {};

  return [...s].map((v, i) => {
    const res = hash[v] === undefined ? -1 : i - hash[v];
    hash[v] = i;
    return res;
  });
};

console.log(solution('banana'));
console.log(solution('foobar'));
