const bubbleSort = (arr) => {
  let needSort = false;
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      needSort = true;
      break;
    }
  }
  if (!needSort) return;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
};

const arr = [5, 1, 6, 4, 2, 3];

console.log(arr);
bubbleSort(arr);
console.log(arr);
