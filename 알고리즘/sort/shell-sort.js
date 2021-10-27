// 셸 정렬
// 정렬할 요소를 그룹으로 나누어 삽입 정렬하고, 병합하는 식으로 동작

const shellSort = (arr) => {
  let len = arr.length;

  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i += 1) {
      let temp = arr[i];
      let j;

      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;
      console.log(arr);
    }
  }
};

const arr = [1, 5, 4, 2, 3];

console.log(arr);
shellSort(arr);
console.log(arr);
