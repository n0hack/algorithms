const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ').map((el) => parseInt(el));
}).on('close', function () {
  const [a, b, c] = [...input];

  if (b >= c) {
    console.log(-1);
  } else {
    console.log(Math.floor(a / (c - b)) + 1);
  }

  process.exit();
});
