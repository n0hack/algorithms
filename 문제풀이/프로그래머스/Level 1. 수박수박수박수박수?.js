const solution = (n) => {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += i % 2 === 0 ? '수' : '박';
  }
  return result;
};

const inputs = [3, 4];
inputs.forEach((input) => console.log(solution(input)));
