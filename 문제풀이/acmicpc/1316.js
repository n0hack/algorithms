const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const lines = Number(input[0]);
  let ans = 0;

  let stack;
  for (let line = 1; line <= lines; line++) {
    let text = input[line];
    stack = {};
    for (let i = 0; i < text.length; i++) {
      if (Object.keys(stack).includes(text[i])) {
        // 스택에 이미 문자가 있는 경우
        // 앞 글자와 비교해서 그룹임을 확인
        if (text[i] !== text[i - 1]) {
          stack[`${text[i]}`] = 'x';
        }
      } else {
        // 스택에 최초 문자 추가
        stack[`${text[i]}`] = 'o';
      }
    }

    // x를 가진 key가 있다면 해당 문자열은 그룹이 아님
    if (Object.values(stack).includes('x')) {
    } else {
      ans += 1;
    }
  }
  console.log(ans);
  process.exit();
});
