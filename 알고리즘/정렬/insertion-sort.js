const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    // 이미 정렬이 되어 있는 경우 패스
    if (arr[i] >= arr[i - 1]) continue;

    for (let j = i; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
};

const arr = [1, 5, 4, 2, 3];

console.log(arr);
insertionSort(arr);
console.log(arr);
