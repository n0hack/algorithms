const solution = (n, lost, reserve) => {
  // 여벌을 챙겼으나 도난 당한 학생들 처리
  let _lost = lost.filter((v) => !reserve.includes(v)).sort((a, b) => a - b);
  let _reserve = reserve.filter((v) => !lost.includes(v)).sort((a, b) => a - b);

  // prettier-ignore
  return n - _lost.filter(a => {
    // 바로 옆에 있는 학생에게 체육복을 빌림
    const extra = _reserve.find(b => Math.abs(a - b) === 1);
    if(!extra) return true;
    _reserve = _reserve.filter(b => b !== extra);
  }).length;
};

const inputs = [
  // [n, [lost], [reserve]]
  [5, [2, 4], [1, 3, 5]],
  [5, [2, 4], [3]],
  [3, [3], [1]],
  [10, [2, 3, 8, 9], [1, 2, 9, 10]],
  [7, [2, 3, 4], [1, 2, 3, 6]],
];
inputs.forEach((input) => console.log(solution(...input)));
