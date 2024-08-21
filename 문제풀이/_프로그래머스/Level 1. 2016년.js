const solution = (a, b) => {
  const week = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const day = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 2016년 1월 1일부터 시작하므로, 하루는 빼고 시작
  let result = b - 1;

  for (let i = 0; i < a - 1; i++) {
    result += day[i];
  }

  return week[result % 7];
};

const inputs = [[5, 24]];
inputs.forEach((input) => console.log(solution(...input)));
