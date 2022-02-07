const arr = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];
const table = Array.from({ length: Math.max(...arr) + 1 }, () => 0);

arr.forEach((item) => table[item]++);

for (let i = 0; i < table.length; i++) {
  for (let j = 0; j < table[i]; j++) process.stdout.write(`${i} `);
}
console.log();
