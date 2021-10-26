// 선택 정렬
// 인덱스(minIndex)를 기반으로 정렬
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
    }

    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
};

const arr = [1, 5, 4, 2, 3];

console.log(arr);
selectionSort(arr);
console.log(arr);
