const solution = (N, stages) => {
  let answer = [];

  for (let n = 1; n <= N; n++) {
    // 각 스테이지를 순회하면서 실패율 계산
    const rate = stages.filter((stage) => n === stage).length / stages.length;
    stages = stages.filter((stage) => n !== stage);
    answer.push([n, rate]);
  }
  // 실패율을 기반으로 내림차순 후 스테이지 번호만 반환
  answer.sort((a, b) => b[1] - a[1]);
  return answer.map((v) => v[0]);
};

const inputs = [
  [5, [2, 1, 2, 6, 2, 4, 3, 3]],
  [4, [4, 4, 4, 4, 4]],
];
inputs.forEach((input) => console.log(solution(...input)));
