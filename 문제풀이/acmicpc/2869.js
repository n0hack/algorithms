const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ').map((el) => parseInt(el));
}).on('close', function () {
  const result = Math.floor((input[2] - input[1] - 1) / (input[0] - input[1])) + 1;
  console.log(result);
  process.exit();
});
