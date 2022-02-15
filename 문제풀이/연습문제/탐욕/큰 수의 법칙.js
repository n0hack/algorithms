let [n, m, k] = [5, 8, 3];
const numbers = [2, 4, 5, 4, 6];

numbers.sort((a, b) => b - a);
const first = numbers[0];
const second = numbers[1];

let result = 0;
let count = Math.floor(m / (k + 1)) * k;
count += m % (k + 1);

result += first * count;
result += (m - count) * second;

console.log(result);
