// 괄호 평가

function check(input) {
  const stack = [];
  let temp = 0;

  input = Array.from(input);

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      stack.push(input[i]);
      temp += 1;
    } else if (input[i] === ')') {
      stack.pop();
      temp -= 1;
    }

    if (temp < 0) return false;
  }

  return stack.length === 0 ? true : false;
}

const input = '()(())';
check(input) ? console.log('Correct') : console.log('Error');
