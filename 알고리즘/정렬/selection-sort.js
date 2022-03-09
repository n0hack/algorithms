const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // minValue?
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }

    if (minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }
};

const arr = [1, 3, 5, 2, 4];

console.log(arr);
selectionSort(arr);
console.log(arr);
