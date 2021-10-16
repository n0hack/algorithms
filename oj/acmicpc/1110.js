const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = line;
}).on('close', function () {
  let n = 0;
  let temp = input;

  input = Number(input);
  while (true) {
    // 주어진 수가 10 이하인 경우
    if (temp.length === 1) temp = '0' + temp;

    // 문자열 분할 ('26' -> ['2', '6'])
    let [num1, num2] = Array.from(temp);
    [num1, num2] = [Number(num1), Number(num2)];
    temp = num1 + num2;

    // 계산 결과가 10 이상인 경우
    if (temp >= 10) temp -= 10;
    temp = `${num2}${temp}`;

    n = n + 1;

    if (Number(temp) === input) {
      break;
    }
  }

  console.log(n);
  process.exit();
});
