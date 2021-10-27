const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const result = Array.from(input[1]).reduce(
    (pre, cur) => Number(pre) + Number(cur),
    0
  );
  console.log(result);
  process.exit();
});
