const solution = (N, stages) => {
  let answer = [];

  // 반복문을 통해 [스테이지, 실패율]을 answer에 추가
  for (let i = 1; i <= N; i++) {
    const rate = stages.filter((stage) => stage === i).length / stages.length;
    stages = stages.filter((stage) => stage !== i);
    answer.push([i, rate]);
  }

  // 실패율에 따라 내림차순 정렬 후 스테이지 번호로 최종 변환
  answer.sort((a, b) => b[1] - a[1]);
  return answer.map((v) => v[0]);
};

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
