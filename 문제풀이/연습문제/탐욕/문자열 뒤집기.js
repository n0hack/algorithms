const solution = (s) => {
  let count0 = 0;
  let count1 = 0;
  s = [...s];

  if (s[0] === '1') count0 = 1;
  else count1 = 1;

  // 다음 수에서 어떤 값으로 바뀌는지 계산
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) {
      if (s[i + 1] === '1') count0 += 1;
      else count1 += 1;
    }
  }

  return Math.min(count0, count1);
};

const inputs = ['0001100'];
inputs.forEach((input) => console.log(solution(input)));
