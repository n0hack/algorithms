const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const tail = arr.slice(1);

  const left = tail.filter((item) => item < pivot);
  const right = tail.filter((item) => item > pivot);

  return quickSort(left).concat([pivot], quickSort(right));
};

const arr = [5, 1, 6, 4, 8, 3, 7, 9, 2];
console.log(quickSort(arr));
