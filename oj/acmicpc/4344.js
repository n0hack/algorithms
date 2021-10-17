const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const numOfCase = Number(input[0]);

  for (let i = 1; i <= numOfCase; i++) {
    let line = input[i].split(' ');
    let numOfStudent = Number(line[0]);

    let sum = 0;
    for (j = 1; j <= numOfStudent; j++) {
      sum += Number(line[j]);
    }
    let avg = sum / numOfStudent;
    let cnt = 0;
    for (j = 1; j <= numOfStudent; j++) {
      if (avg < Number(line[j])) cnt += 1;
    }

    console.log(`${((cnt / numOfStudent) * 100).toFixed(3)}%`);
  }

  process.exit();
});
