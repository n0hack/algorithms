const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.toUpperCase();
}).on('close', function () {
  let ans = '';
  const counterObj = {};

  // make counter
  Array.from(input).forEach((char) => {
    if (!(char in counterObj)) {
      counterObj[`${char}`] = 1;
    } else {
      counterObj[`${char}`]++;
    }
  });

  // sort
  const counterArray = [];
  Object.keys(counterObj).forEach((key) =>
    counterArray.push({ key, value: counterObj[key] })
  );
  counterArray.sort((a, b) => b.value - a.value);

  // find max
  let max = counterArray[0];
  ans = `${max.key}`;

  // find duplicated
  for (let i = 1; i < counterArray.length; i++) {
    if (max.value === counterArray[i].value) {
      ans = '?';
      break;
    } else if (max.value > counterArray[i].value) {
      break;
    }
  }

  console.log(ans);
  process.exit();
});
