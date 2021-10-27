const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = Array.from({ length: Number(line) }, (_, i) => i + 1);
}).on('close', function () {
  let result = input.reduce((prev, cur) => {
    return prev + cur;
  }, 0);
  console.log(result);
  process.exit();
});
