const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] <= arr[i]) continue;

    for (j = i; j > 0; j--) {
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
