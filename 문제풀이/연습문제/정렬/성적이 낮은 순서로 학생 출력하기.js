// D 기업 프로그래밍 콘테스트 예선
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let result = '';

  const students = input.slice(1).map((item) => item.split(' '));
  students.sort((a, b) => parseInt(a[1]) - parseInt(b[1]));

  students.forEach((student) => (result += `${student[0]} `));
  console.log(result);
  process.exit();
});
