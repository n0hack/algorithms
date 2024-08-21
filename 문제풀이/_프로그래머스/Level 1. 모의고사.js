const solution = (answers) => {
  const result = [
    [1, 0],
    [2, 0],
    [3, 0],
  ];
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  patterns.forEach((pattern, student) => {
    // 비교를 간단히 하기 위해 답변과 패턴 길이 맞추기
    while (answers.length > pattern.length) pattern = pattern.concat(pattern);
    for (let i = 0, j = 0; i < answers.length && j < pattern.length; i++, j++) {
      if (answers[i] === pattern[i]) result[student][1]++;
    }
  });

  const max = result.reduce((a, b) => (a[1] > b[1] ? a : b))[1];
  return result.filter((v) => v[1] === max).map((v) => v[0]);
};

const inputs = [
  [1, 2, 3, 4, 5],
  [1, 3, 2, 4, 2],
];
inputs.forEach((input) => console.log(solution(input)));
