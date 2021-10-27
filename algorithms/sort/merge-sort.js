// 병합 정렬
const merge = (arr, left, mid, right) => {
  // 왼쪽 배열, 오른쪽 배열 생성
  const L = [];
  const R = [];
  let leftMax = mid - left + 1;
  let rightMax = right - mid;

  // 각 임시 배열 할당
  for (let i = 0; i < leftMax; i++) L.push(arr[left + i]);
  for (let j = 0; j < rightMax; j++) R.push(arr[mid + j + 1]);

  // 병합
  let i = 0;
  let j = 0;
  let k = left;

  while (i < leftMax && j < rightMax) {
    if (L[i] <= R[j]) {
      arr[k++] = L[i++];
    } else {
      arr[k++] = R[j++];
    }
  }

  // 처리되지 않은 값 마저 처리
  while (i < leftMax) arr[k++] = L[i++];
  while (j < rightMax) arr[k++] = R[j++];
};

const mergeSort = (arr, left, right) => {
  if (left >= right) return;

  // 분할
  const mid = Math.floor((right + left) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  // 병합
  merge(arr, left, mid, right);
};

const arr = [1, 5, 4, 2, 3];

console.log(arr);
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
