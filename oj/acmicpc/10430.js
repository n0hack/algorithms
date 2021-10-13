const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let [a, b, c] = [0, 0, 0];

rl.on('line', function (line) {
  [a, b, c] = line.split(' ').map((el) => parseInt(el));
}).on('close', function () {
  console.log((a + b) % c);
  console.log(((a % c) + (b % c)) % c);
  console.log((a * b) % c);
  console.log(((a % c) * (b % c)) % c);
  process.exit();
});
