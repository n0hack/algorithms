const solution = (n, lost, reserve) => {
  let result = 0;

  // 보유 현황 초기화
  const has = Array(n).fill(1);
  lost.forEach((v) => has[v - 1]--);
  reserve.forEach((v) => has[v - 1]++);

  // 반복문을 순회하며 빌릴 수 있는지 확인
  for (let i = 0; i < has.length; i++) {
    if (has[i] === 0) {
      if (has[i - 1] > 1) {
        has[i]++;
        has[i - 1]--;
      } else if (has[i + 1] > 1) {
        has[i]++;
        has[i + 1]--;
      }
    }

    if (has[i] !== 0) result++;
  }

  return result;
};

const solution2 = (n, lost, reserve) => {
  return (
    n -
    lost.filter((a) => {
      const b = reserve.find((r) => Math.abs(r - a) <= 1);
      if (!b) return true;
      reserve = reserve.filter((r) => r !== b);
    }).length
  );
};

console.log(solution2(5, [2, 4], [1, 3, 5]));
console.log(solution2(5, [2, 4], [3]));
console.log(solution2(3, [3], [1]));
console.log(solution2(5, [2, 4], [1, 2, 3, 5]));
