// 기수 정렬
// 각 숫자의 자릿수를 비교하여 정렬하는 알고리즘
const { makeFTable } = require('./counting-sort');

const countSort = (arr, exp) => {
  // 자릿수 비교를 위한 임시 배열 생성
  const temp = arr.map((v) => Math.floor(v / exp) % 10);

  // 도수분포표 생성
  const fTable = makeFTable(temp);

  // 누적 도수분포표 생성
  Object.keys(fTable).reduce((sum, key) => {
    fTable[key] += sum;
    return fTable[key];
  }, 0);

  // 임시 배열을 정렬하되, 기존 배열의 값을 참조해서 할당
  const sorted = Array.from({ length: arr.length }, () => 0);
  for (let i = arr.length - 1; i >= 0; i--) {
    sorted[--fTable[temp[i]]] = arr[i];
  }

  // 기존 배열에 값 복사
  for (i = 0; i < arr.length; i++) arr[i] = sorted[i];
};

const radixSort = (arr) => {
  // 가장 큰 값의 자릿수만큼 반복할 수 있도록 함
  const max = arr.reduce((pre, cur) => (pre > cur ? pre : cur));

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countSort(arr, exp);
  }
};

const arr = [170, 45, 75, 90, 802, 24, 2, 66];

console.log(arr);
radixSort(arr);
console.log(arr);
