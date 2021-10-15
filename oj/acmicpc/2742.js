const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = Number(line);
}).on('close', function () {
  let res = '';
  for (let i = input; i > 0; i--) {
    res += i + '\n';
  }
  console.log(res);
  process.exit();
});
