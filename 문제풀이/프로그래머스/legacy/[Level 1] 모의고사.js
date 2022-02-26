const solution = (answers) => {
  const result = [];
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const st1 = answers.filter((answer, i) => answer === patterns[0][i % patterns[0].length]).length;
  const st2 = answers.filter((answer, i) => answer === patterns[1][i % patterns[1].length]).length;
  const st3 = answers.filter((answer, i) => answer === patterns[2][i % patterns[2].length]).length;
  const max = Math.max(st1, st2, st3);

  if (st1 === max) result.push(1);
  if (st2 === max) result.push(2);
  if (st3 === max) result.push(3);

  return result;

  // patterns.forEach((pattern, student) => {
  //   // 비교를 간단히 하기 위해 답변과 패턴 길이 맞추기
  //   while (answers.length > pattern.length) pattern = pattern.concat(pattern);
  //   for (let i = 0, j = 0; i < answers.length && j < pattern.length; i++, j++) {
  //     if (answers[i] === pattern[i]) result[student][1]++;
  //   }
  // });

  // const max = result.reduce((a, b) => (a[1] > b[1] ? a : b))[1];
  // return result.filter((v) => v[1] === max).map((v) => v[0]);
};

console.time("algorithm");
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
console.timeEnd("algorithm");
