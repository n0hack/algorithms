const solution = (board) => {
  const res = Array.from({ length: board.length }, () => new Array(board.length).fill(true));

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        res[i][j] = false;

        if (res[i - 1]?.[j] !== undefined) res[i - 1][j] = false;
        if (res[i - 1]?.[j - 1] !== undefined) res[i - 1][j - 1] = false;
        if (res[i - 1]?.[j + 1] !== undefined) res[i - 1][j + 1] = false;
        if (res[i]?.[j - 1] !== undefined) res[i][j - 1] = false;
        if (res[i]?.[j + 1] !== undefined) res[i][j + 1] = false;
        if (res[i + 1]?.[j] !== undefined) res[i + 1][j] = false;
        if (res[i + 1]?.[j - 1] !== undefined) res[i + 1][j - 1] = false;
        if (res[i + 1]?.[j + 1] !== undefined) res[i + 1][j + 1] = false;
      }
    }
  }

  return res.reduce((a, b) => {
    const 안전지역 = b.filter((b) => b).length;
    return a + 안전지역;
  }, 0);
};

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);
console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])
);
console.log(
  solution([
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
);
