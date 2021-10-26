// 삽입 정렬
// 정렬이 필요한 요소를 뽑아내어, 이를 적당한 곳에 삽입해 나가는 정렬
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] <= arr[i]) continue;

    for (let j = i; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
};

const arr = [1, 5, 4, 2, 3];

console.log(arr);
insertionSort(arr);
console.log(arr);
