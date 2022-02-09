// stable sorting algorithm Big-O(n log n)
// insertion sort (small pieces) → merge sort
const MIN_MERGE = 32;

const minRunLength = (n) => {
  let r = 0;
  while (n >= MIN_MERGE) {
    r |= n & 1;
    n >>= 1;
  }
  return n + r;
};

const insertionSort = (arr, left, right) => {
  for (let i = left + 1; i <= right; i++) {
    let temp = arr[i];
    let j = i - 1;

    while (j >= left && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
};

const merge = (arr, left, mid, right) => {
  // 배열을 두 개의 조각으로 분할
  let len1 = mid - left + 1;
  let len2 = right - mid;
  let part1 = Array.from({ length: len1 }, () => 0);
  let part2 = Array.from({ length: len2 }, () => 0);

  for (let x = 0; x < len1; x++) part1[x] = arr[l + x];
  for (let x = 0; x < len2; x++) part2[x] = arr[m + l + x];

  let [i, j, k] = [0, 0, l];
  while (i < len1 && j < len2) {
    arr[k] = left[i] <= right[j] ? left[i++] : right[j++];
  }
  while (i < len1) arr[k++] = left[i++];
  while (j < len2) arr[k++] = right[j++];
};

const timSort = (arr, n) => {
  let minRun = minRunLength(MIN_MERGE);

  for (let i = 0; i < n; i += minRun) {
    insertionSort(arr, i, Math.min(i + MIN_MERGE - 1, n - 1));
  }

  for (let size = minRun; size < n; size *= 2) {
    for (let left = 0; left < n; left += size * 2) {
      let mid = left + size - 1;
      let right = Math.min(left + 2 * size - 1, n - 1);

      if (mid < right) mergeSort(arr, left, mid, right);
    }
  }
};

const arr = [5, 1, 23, 7, 3, 4, 2];

timSort(arr, arr.length);
console.log(arr);
