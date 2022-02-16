const solution = (str) => {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === '(') stack.push(char);
    else {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        stack.push(char);
        break;
      }
    }
  }

  return stack.length === 0 ? 'good' : 'bad';
};

console.log(solution('(()())'));
// solution('))()((');
