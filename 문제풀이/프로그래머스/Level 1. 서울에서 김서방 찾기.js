const solution = (seoul) => {
  return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
};

const inputs = [['Jane', 'Kim']];
inputs.forEach((input) => console.log(solution(input)));
