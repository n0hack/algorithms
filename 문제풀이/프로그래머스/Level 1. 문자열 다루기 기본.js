const solution = (s) => {
  if (s.length !== 4 && s.length !== 6) return false;
  for (const ch of [...s]) if (Number.isNaN(Number(ch))) return false;
  return true;
};

const inputs = ['a234', '1234'];
inputs.forEach((input) => console.log(solution(input)));
