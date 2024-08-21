const solution = (arr) => {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    // 값이 달라지는 부분에서만 추가
    if (arr[i] === arr[i + 1]) continue;
    else answer.push(arr[i]);
  }

  return answer;
};

const inputs = [
  [1, 1, 3, 3, 0, 1, 1],
  [4, 4, 4, 3, 3],
];
inputs.forEach((input) => console.log(solution(input)));
