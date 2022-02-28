const solution = (id_list, report, k) => {
  let reports = [...new Set(report)].map((v) => v.split(' '));
  // 신고 당한 횟수 누적
  let counts = new Map();
  for (const report of reports) {
    counts.set(report[1], counts.get(report[1]) + 1 || 1);
  }

  // 신고 결과를 받을 유저 계산
  let notify = new Map();
  for (const report of reports) {
    // k번 이상 신고된 유저는 밴 처리
    if (counts.get(report[1]) >= k) {
      // 유저별로 받아야 하는 메일 개수 누적
      notify.set(report[0], notify.get(report[0]) + 1 || 1);
    }
  }

  return id_list.map((v) => notify.get(v) || 0);
};

const inputs = [
  // [id_list, report, k]
  [['muzi', 'frodo', 'apeach', 'neo'], ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'], 2],
  [['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3],
];
inputs.forEach((input) => console.log(solution(...input)));
