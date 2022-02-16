// 2차원 배열 (100x100)
const memo = Array.from({ length: 100 }, () => Array.from({ length: 100 }, () => 0));

const solution = (a, b) => {
  // 첫 번째 행과 열은 항상 1을 반환
  if (a === 1 || b === 1) memo[a][b] = memo[b][a] = 1;
  // 메모이제이션된 값이 존재하는 경우
  if (memo[a][b]) return memo[a][b];
  else return (memo[a][b] = memo[b][a] = solution(a, b - 1) + solution(a - 1, b));
};

let [r, c] = [3, 2];
console.log(solution(r, c));
