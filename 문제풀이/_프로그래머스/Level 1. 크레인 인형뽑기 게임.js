const solution = (board, moves) => {
  const stack = [];
  const size = board.length;
  let result = 0;

  moves.forEach((move) => {
    // 해당 줄이 비어있다면, 바로 다음 줄로 이동
    if (board[size - 1][move - 1] === 0) return;

    for (let col = 0; col < size; col++) {
      const doll = board[col][move - 1];
      // 인형이 있는 행까지 순회해서 작업
      if (doll !== 0) {
        // 스택 최상단에 같은 종류의 인형이 있다면 제거
        if (stack.length > 0 && stack[stack.length - 1] === doll) {
          result += 2;
          stack.pop();
        } else {
          stack.push(doll);
        }
        // 스택으로 인형을 옮겼으면 기계에서 제거
        board[col][move - 1] = 0;
        break;
      }
    }
  });

  return result;
};

const inputs = [
  [
    // board
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    // moves
    [1, 5, 3, 5, 1, 2, 1, 4],
    ,
  ],
];
inputs.forEach((input) => console.log(solution(...input)));
