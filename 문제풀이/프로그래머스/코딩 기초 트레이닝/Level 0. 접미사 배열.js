const solution = (str) => {
  const res = [];

  for (let i = 1; i <= str.length; i++) {
    res.push(str.slice(-i));
  }

  return res.sort((a, b) => a.localeCompare(b));
};

console.log(solution('banana'));
console.log(solution('programmers'));
