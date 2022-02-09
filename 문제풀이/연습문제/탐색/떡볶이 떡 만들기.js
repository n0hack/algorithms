// 파라메트릭 서치(Parametric Search)
// 원하는 조건을 만족하는 가장 알맞은 값을 찾는 문제
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const [n, m] = input[0].split(' ').map((item) => parseInt(item));
  const heights = input[1].split(' ').map((item) => parseInt(item));
  let result = 0;

  let start = 0;
  let end = Math.max(...heights);

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const sum = heights.reduce((pre, cur) => {
      let temp = cur - mid;
      if (temp < 0) temp = 0;

      return pre + temp;
    }, 0);

    if (sum === m) {
      result = mid;
      break;
    } else if (sum > m) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(result);
  process.exit();
});
