const partition = (arr, left, right) => {
  const pivot = arr[right];
  let i = left - 1;

  for (let j = left; j <= right - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  return i + 1;
};

const quickSort = (arr, left, right) => {
  if (left < right) {
    const index = partition(arr, left, right);
    quickSort(arr, left, index - 1);
    quickSort(arr, index + 1, right);
  }
};
const arr = [5, 1, 6, 4, 8, 3, 7, 9, 2];

console.log(arr);
quickSort(arr, 0, arr.length - 1);
console.log(arr);
