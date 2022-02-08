// Iterative Quick Sort
function partition(arr, start, end) {
  const pivot = arr[start];
  let [left, right] = [start + 1, end];

  while (left <= right) {
    while (left <= right && arr[left] <= pivot) left++;
    while (left <= right && arr[right] > pivot) right--;

    if (left <= right) [arr[left], arr[right]] = [arr[right], arr[left]];
    else [arr[start], arr[right]] = [arr[right], arr[start]];
  }
  return right;
}

function quickSort(arr, start, end) {
  const stack = [];
  stack.push([start, end]);

  while (stack.length !== 0) {
    const [start, end] = stack.pop();
    const pivot = partition(arr, start, end);

    if (pivot - 1 > start) stack.push([start, pivot - 1]);
    if (pivot + 1 < end) stack.push([pivot + 1, end]);
  }
}

const arr = [5, 4, 2, 6, 1, 3, 7];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
