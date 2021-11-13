// function findIndexAll(iter, predicate) {
//   const newIter = [];

//   for (let i = 0; i < iter.length; i++) {
//     if (predicate(iter[i])) newIter.push(i);
//   }
//   return newIter;
// }

// const solution = (dartResult) => {
//   const info = dartResult.match(/(\d+)|./g).map((item) => (Number.isNaN(parseInt(item)) ? item : parseInt(item)));
//   const index = findIndexAll(info, (item) => typeof item === "number");
//   let now = -1;

//   for (let i = 0; i < info.length; i++) {
//     if (typeof info[i] === "number") now += 1;

//     switch (info[i]) {
//       case "D":
//         info[index[now]] **= 2;
//         break;
//       case "T":
//         info[index[now]] **= 3;
//         break;
//       case "*":
//         info[index[now]] *= 2;
//         info[index[now - 1]] *= 2;
//         break;
//       case "#":
//         info[index[now]] *= -1;
//         break;
//     }
//   }
//   return info.filter((item) => typeof item === "number").reduce((a, b) => a + b);
// };

// prettier-ignore
const bonus = {
  S: 1, D: 2, T: 3,
  "*": 2, "#": -1, undefined: 1,
};

const solution2 = (dartResult) => {
  // 다트 분리 ["1S", "2D*", "3T"]
  const darts = dartResult.match(/\d+[SDT][*#]?/g);

  for (let i = 0; i < darts.length; i++) {
    // 문자 단위로 분리 후 점수 계산 ["1S"] -> ["1", "S"]
    const dart = darts[i].match(/\d+|([SDT])|([*#])/g);
    let score = Math.pow(dart[0], bonus[dart[1]]) * bonus[dart[2]];

    // 보너스 점수 *이 포함되어 있는 경우 처리
    if (dart[2] && dart[2] === "*" && darts[i - 1]) darts[i - 1] *= bonus[dart[2]];

    darts[i] = score;
  }
  return darts.reduce((a, b) => a + b);
};

// 2 + 8 + 27 = 37
console.log(solution2("1S2D*3T"));
// 1 + -2 + 10 = 9
console.log(solution2("1D2S#10S"));
// 1 + 2 + 0 = 3
console.log(solution2("1D2S0T"));
// 4 + 16 + 3 = 23
console.log(solution2("1S*2T*3S"));
console.log(solution2("1D#2S*3S"));
console.log(solution2("1T2D3D#"));
console.log(solution2("1D2S3T*"));
