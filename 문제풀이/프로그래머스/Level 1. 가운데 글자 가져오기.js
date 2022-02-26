const solution = (s) => {
  const len = s.length;

  if (len % 2) return s[Math.floor(len / 2)];
  else return s.slice(Math.floor(len / 2) - 1, Math.floor(len / 2) + 1);
};

const inputs = ['abcde', 'qwer'];
inputs.forEach((input) => console.log(solution(input)));
