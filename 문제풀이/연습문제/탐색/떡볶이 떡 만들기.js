// 파라메트릭 서치(Parametric Search)
// 원하는 조건을 만족하는 가장 알맞은 값을 찾는 문제
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cut = (arr, target) => {
  let min = 0;
  let max = Math.max(...arr);

  while (min <= max) {
    const cut = Math.floor((min + max) / 2);
    const after = arr.reduce((pre, cur) => {
      let temp = cur - cut;
      if (temp < 0) temp = 0;

      return pre + temp;
    }, 0);

    if (after === target) return cut;
    else if (after > target) min = cut + 1;
    else if (after < target) max = cut - 1;
  }
};

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const [n, m] = input[0].split(' ').map((item) => parseInt(item));
  const heights = input[1].split(' ').map((item) => parseInt(item));
  console.log(cut(heights, m));
  process.exit();
});
