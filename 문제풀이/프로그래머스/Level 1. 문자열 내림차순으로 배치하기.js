const solution = (s) => {
  const upper = [...s].filter((ch) => 'A' <= ch && ch <= 'Z').sort((a, b) => b.localeCompare(a));
  const lower = [...s].filter((ch) => 'a' <= ch && ch <= 'z').sort((a, b) => b.localeCompare(a));
  return lower.concat(upper).join('');
};

const inputs = ['Zbcdefg'];
inputs.forEach((input) => console.log(solution(input)));
