const solution = (s) => {
  if (s.length !== 4 && s.length !== 6) return false;
  for (const a of [...s]) {
    if (Number.isNaN(Number(a))) return false;
  }
  return true;
};

const solution2 = (s) => {
  const regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
};

console.log(solution2("23a4"));
console.log(solution2("1234"));
