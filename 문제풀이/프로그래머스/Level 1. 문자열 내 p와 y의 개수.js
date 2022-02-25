const solution = (s) => {
  const p = [...s].filter((ch) => ch === 'p' || ch === 'P').length;
  const y = [...s].filter((ch) => ch === 'y' || ch === 'Y').length;

  return p === y;
};

const inputs = ['pPoooyY', 'Pyy'];
inputs.forEach((input) => console.log(solution(input)));
