const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let num = Number(input[0]);
  let res = 0;
  let temp = 1;
  const score = [];

  for (let i = 1; i <= num; i++) {
    let arr = Array.from(input[i]);
    arr.forEach((v) => {
      if (v === 'O') {
        res += temp++;
      } else {
        temp = 1;
      }
    });
    score.push(res);
    res = 0;
    temp = 1;
  }
  console.log(score.join('\n'));
  process.exit();
});
