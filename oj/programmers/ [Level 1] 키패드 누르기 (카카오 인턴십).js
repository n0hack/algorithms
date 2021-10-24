const calcDist = (number, now, position, hand) => {
  // 두 좌표 거리 계산
  let leftDist = Math.abs(position[now.left][0] - position[number][0]) + Math.abs(position[now.left][1] - position[number][1]);
  let rightDist = Math.abs(position[now.right][0] - position[number][0]) + Math.abs(position[now.right][1] - position[number][1]);

  // 값이 동일하면 hand(왼손잡이/오른손잡이)를 반환
  if (leftDist === rightDist) return hand;
  return leftDist < rightDist ? 'left' : 'right';
};

function solution(numbers, hand) {
  const position = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };
  const now = { left: '*', right: '#' };

  return numbers
    .map((number) => {
      if ([1, 4, 7].includes(number)) {
        now.left = number;
        return 'L';
      }
      if ([3, 6, 9].includes(number)) {
        now.right = number;
        return 'R';
      }

      let result = calcDist(number, now, position, hand);
      if (result === 'left') {
        now.left = number;
        return 'L';
      } else {
        now.right = number;
        return 'R';
      }
    })
    .join('');
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
