const solution = (s) => {
  // 숫자 테이블
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let answer = s;

  for (let i = 0; i < numbers.length; i++) {
    // numbers[i]로 문자열을 분할한 후, 다시 그 자리를 i로 채우면서 결합
    answer = answer.split(numbers[i]);
    answer = answer.join(i);
  }

  return parseInt(answer);
};

const inputs = ['one4seveneight', '23four5six7', '2three45sixseven', '123'];
inputs.forEach((input) => console.log(solution(input)));
