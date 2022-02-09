const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return 'yes';
    else if (arr[mid] > target) end = mid - 1;
    else if (arr[mid] < target) start = mid + 1;
  }
  return 'no';
};

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const nArr = input[1].split(' ').sort((a, b) => a - b);
  const mArr = input[3].split(' ');

  mArr.forEach((target) => {
    process.stdout.write(`${binarySearch(nArr, target)} `);
  });
  console.log();
  process.exit();
});
