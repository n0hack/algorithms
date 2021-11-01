function solution(board, moves) {
  let answer = 0;
  const basket = [];

  moves.forEach((move) => {
    let len = board.length;

    // 현재 위치에서 가져올 인형이 없다면 패스
    if (board[len - 1][move - 1] === 0) return;

    for (let y = 0; y < len; y++) {
      if (board[y][move - 1] !== 0) {
        const doll = board[y][move - 1];

        // 바구니에 같은 인형이 있는지 체크
        if (basket.length > 0 && basket[basket.length - 1] === doll) {
          answer += 2;
          basket.pop();
        } else {
          basket.push(doll);
        }
        board[y][move - 1] = 0;
        break;
      }
    }
  });

  return answer;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
