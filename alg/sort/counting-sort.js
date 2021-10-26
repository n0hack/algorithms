// 계수 정렬
// 도수분포표를 이용한 정렬

// 도수분포표 생성
const makeFTable = (arr) => {
  const fTable = {};

  arr.forEach((v) => {
    if (!fTable[v]) fTable[v] = 1;
    else fTable[v]++;
  });

  return fTable;
};

const countingSort = (arr, fTable) => {
  // 누적 도수분포표 생성
  Object.keys(fTable).reduce((sum, key) => {
    fTable[key] += sum;
    return fTable[key];
  }, 0);

  // 정렬
  const sorted = Array.from({ length: arr.length }, () => 0);
  arr.forEach((v) => {
    sorted[--fTable[v]] = v;
  });

  return sorted;
};

const arr = [1, 2, 5, 3, 4, 2, 6, 3];
const fTable = makeFTable(arr);

// console.log(arr);
// const sorted = countingSort(arr, fTable);
// console.log(sorted);

module.exports = { makeFTable, countingSort };
