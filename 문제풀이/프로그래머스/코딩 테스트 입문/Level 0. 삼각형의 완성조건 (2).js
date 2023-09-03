const solution = (sides) => {
  let answer = 0;

  if (sides[0] < sides[1]) {
    [sides[0], sides[1]] = [sides[1], sides[0]];
  }

  // 가장 긴 변이 sides[0]인 경우
  for (let i = sides[0] - sides[1] + 1; i <= sides[0]; i++) answer++;

  // 가장 긴 변이 나머지 한 변인 경우
  for (let i = sides[0] + 1; i < sides[0] + sides[1]; i++) answer++;

  return answer;
};

console.log(solution([1, 2]));
console.log(solution([3, 6]));
console.log(solution([11, 7]));
