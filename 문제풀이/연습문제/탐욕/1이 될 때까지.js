let [n, k] = [25, 5];
let result = 0;

while (n > 1) {
  if (n % k === 0) n /= 5;
  else n -= 1;
  result += 1;
}

console.log(result);
