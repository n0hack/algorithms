// 최대공약수 (Greatest Common Divisor)
// Recursive
const gcd = (x, y) => {
  if (y === 0) return x;
  return gcd(y, x % y);
};

// Iterative
const gcd2 = (x, y) => {
  while (true) {
    [x, y] = [y, x % y];
    if (y === 0) return x;
  }
};

let num1 = 22;
let num2 = 8;
console.log(gcd(num1, num2));
console.log(gcd2(num1, num2));
