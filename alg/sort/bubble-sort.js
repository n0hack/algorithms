// 버블 정렬
const bubbleSort = (arr) => {
  // 정렬이 필요 없는 경우
  let needSort = false;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      needSort = true;
    }
  }
  if (!needSort) return;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
};

const arr = [1, 5, 4, 2, 3];

console.log(arr);
bubbleSort(arr);
console.log(arr);
