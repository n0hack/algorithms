const shellSort = (arr) => {
  let n = arr.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // 구간마다 비교하며 정렬
    for (let i = gap; i < n; i++) {
      let temp = arr[i];

      let j;
      // 삽입 정렬
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;
    }
  }
};

const arr = [8, 1, 4, 2, 7, 6, 3, 5];
shellSort(arr);
console.log(arr);
