const input = 'a1'.split('');
let result = 0;

let [x, y] = [parseInt(input[1]), input[0].charCodeAt() - 96];
const moves = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];

moves.forEach((move) => {
  let nx = x + move[0];
  let ny = y + move[1];

  if (nx <= 1 && nx <= 8 && 1 <= ny && ny <= 8) result++;
});

console.log(result);
