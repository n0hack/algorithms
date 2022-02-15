let n = 1260;
let count = 0;

const coinTypes = [500, 100, 50, 10];

for (const coin of coinTypes) {
  count += Math.floor(n / coin);
  n %= coin;
}

console.log(count);
