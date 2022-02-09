// const partition = (arr, left, right) => {
//   const pivot = left++;

//   while (left < right) {
//     while (arr[left] <= arr[pivot]) left++;
//     while (arr[right] > arr[pivot]) right--;

//     if (left < right) {
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//     }
//   }
//   [arr[pivot], arr[right]] = [arr[right], arr[pivot]];
//   console.log(arr, left, right);
//   return right;
// };

// const quickSort = (arr, left, right) => {
//   if (left < right) {
//     const index = partition(arr, left, right);
//     quickSort(arr, left, index - 1);
//     quickSort(arr, index + 1, right);
//   }
// };

const arr = [1, 5, 4, 2, 3];

console.log(arr);
quickSort(arr, 0, arr.length - 1);
console.log(arr);
