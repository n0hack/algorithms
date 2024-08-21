// 눌러야 하는 버튼에서 가까운 엄지 손가락을 찾는 함수
const calcDist = (position, number, hand, leftHand, rightHand) => {
  // 두 점 사이의 거리를 구하는 공식 사용
  // prettier-ignore
  const leftDist = Math.abs(position[number][0] - position[leftHand][0]) + Math.abs(position[number][1] - position[leftHand][1]);
  // prettier-ignore
  const rightDist = Math.abs(position[number][0] - position[rightHand][0]) + Math.abs(position[number][1] - position[rightHand][1])

  if (leftDist > rightDist) return 'R';
  else if (leftDist < rightDist) return 'L';
  else return hand === 'right' ? 'R' : 'L';
};

const solution = (numbers, hand) => {
  // 번호별 좌표값
  // prettier-ignore
  const position = {
    1: [0, 0], 2: [0, 1], 3: [0, 2],
    4: [1, 0], 5: [1, 1], 6: [1, 2],
    7: [2, 0], 8: [2, 1], 9: [2, 2],
    '*': [3, 0], 0: [3, 1], '#': [3, 2],
  };
  // 결과를 담을 배열
  const answer = [];
  // 왼쪽 열과 오른쪽 열
  const leftSide = [1, 4, 7];
  const rightSide = [3, 6, 9];
  // 시작 지점
  let leftHand = '*';
  let rightHand = '#';

  // 반복문 순회
  numbers.forEach((number) => {
    if (leftSide.includes(number)) {
      // 1 4 7은 무조건 왼손
      leftHand = number;
      answer.push('L');
    } else if (rightSide.includes(number)) {
      // 3 6 9는 무조건 오른손
      rightHand = number;
      answer.push('R');
    } else {
      // 가운데 번호는 현재 더 가까운 손가락이 눌러야 함
      const h = calcDist(position, number, hand, leftHand, rightHand);
      if (h === 'L') {
        leftHand = number;
        answer.push('L');
      } else {
        rightHand = number;
        answer.push('R');
      }
    }
  });

  // 배열을 하나의 문자열로 합침
  return answer.join('');
};

const inputs = [
  [[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'],
  [[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'],
];
inputs.forEach((input) => console.log(solution(...input)));
