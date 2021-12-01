const bubbleSort = (arr) => {
  let needSort = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      needSort = true;
      break;
    }
  }
  if (needSort === false) return;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {
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
