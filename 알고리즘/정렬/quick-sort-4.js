// Iterative Quick Sort
const quickSort = (arr, start, end) => {
  const stack = [];
  stack.push([start, end]);

  while (stack.length !== 0) {
    let [left, right] = stack.pop();
    const pivot = left++;

    while (left <= right) {
      while (arr[left] <= arr[pivot]) left++;
      while (arr[right] > arr[pivot]) right--;

      if (left <= right) [arr[left], arr[pivot]] = [arr[pivot], arr[left]];
    }
  }
};

const arr = [5, 4, 2, 6, 1, 3, 7];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
