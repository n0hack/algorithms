const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

// Memory: 87156 kb, Time: 604 ms
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const length = Number(input[0]);
  const numbers = input[1].split(' ');

  for (let i = 0; i < length; i++) {
    numbers[i] = Number(numbers[i]);
  }

  let max = (min = numbers[0]);

  for (let i = 1; i < length; i++) {
    if (numbers[i] > max) max = numbers[i];
    if (numbers[i] < min) min = numbers[i];
  }
  console.log(min, max);
  process.exit();
});

// Memory: 103312 kb, Time: 2036 ms
// rl.on('line', (line) => {
//   input.push(line);
// }).on('close', () => {
//   const length = Number(input[0]);
//   const numbers = input[1].split(' ');

//   numbers.sort((a, b) => Number(a) - Number(b));
//   console.log(`${numbers[0]} ${numbers[length - 1]}`);

//   process.exit();
// });
