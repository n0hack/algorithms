const search = (arr, left, right, n) => {
  if (left >= right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === n) return mid;
  else if (arr[mid] < n) return search(arr, mid + 1, right, n);
  else if (arr[mid] > n) return search(arr, left, mid - 1, n);
};

const arr = [1, 7, 11, 12, 14, 23, 67, 139, 871];
console.log(search(arr, 0, arr.length - 1, 161));
