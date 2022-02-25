const n = 5;
let adventurers = [2, 3, 1, 2, 2];

let count = 0;

adventurers.sort((a, b) => b - a);

while (adventurers.length !== 0) {
  adventurers.splice(0, adventurers[0]);
  count++;
}
console.log(count);
