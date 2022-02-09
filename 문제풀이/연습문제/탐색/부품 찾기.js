// 기출 문제
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return 'yes';
    else if (arr[mid] > target) right = mid - 1;
    else if (arr[mid] < target) left = mid + 1;
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
