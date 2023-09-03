const solution = (inputs, board) => {
  const d = {
    left: [-1, 0],
    right: [1, 0],
    up: [0, 1],
    down: [0, -1],
  };

  let x = Math.floor(board[0] / 2);
  let y = Math.floor(board[1] / 2);
  const origin = [x, y];

  inputs.forEach((input) => {
    const nextX = x + d[input][0];
    const nextY = y + d[input][1];

    if (0 <= nextX && nextX < board[0]) x = nextX;
    if (0 <= nextY && nextY < board[1]) y = nextY;
  });

  return [x - origin[0], y - origin[1]];
};

console.log(solution(['left', 'right', 'up', 'right', 'right'], [11, 11]));
console.log(solution(['down', 'down', 'down', 'down', 'down'], [7, 9]));
