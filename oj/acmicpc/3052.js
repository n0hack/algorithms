const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const result = [];

rl.on('line', (line) => {
  input.push(Number(line));
}).on('close', () => {
  input.forEach((v) => {
    if (!result.includes(v % 42)) result.push(v % 42);
  });
  console.log(result.length);
  process.exit();
});
