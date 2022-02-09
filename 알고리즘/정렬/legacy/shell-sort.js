const shellSort = (arr) => {
  const len = arr.length;

  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      const temp = arr[i];
      let j;

      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;
    }
  }
};

const arr = [1, 5, 4, 2, 3];

console.log(arr);
shellSort(arr);
console.log(arr);
