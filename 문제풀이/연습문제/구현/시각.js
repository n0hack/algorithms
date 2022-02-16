// 완전 탐색(Brute-Forcing)은 데이터의 개수가 100만 개 이하일 때 적절
const n = 5;
let count = 0;

for (let i = 0; i <= n; i++) {
  for (let j = 0; j <= 59; j++) {
    for (let k = 0; k <= 59; k++) {
      if (('' + i + j + k).includes('3')) count++;
    }
  }
}

console.log(count);
