const quickSort = (arr, start, end) => {
  if (start >= end) return;

  const pivot = start;
  let left = start + 1;
  let right = end;

  while (left <= right) {
    while (arr[left] <= arr[pivot]) left++;
    while (arr[right] > arr[pivot]) right--;

    if (left < right) [arr[left], arr[right]] = [arr[right], arr[left]];
    else [arr[pivot], arr[right]] = [arr[right], arr[pivot]];
  }

  quickSort(arr, start, right - 1);
  quickSort(arr, right + 1, end);
};

const arr = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8];

quickSort(arr, 0, arr.length - 1);
console.log(arr);
