const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = Number(line);
}).on('close', function () {
  // 범위가 6의 배수로 늘어남
  // 1 - 2~7 (6개) - 8~19(12개)
  let scope = 1;
  let i = 1;
  for (i = 1; i <= input; i++) {
    scope += (i - 1) * 6;
    if (input <= scope) break;
  }

  console.log(i);
  process.exit();
});
