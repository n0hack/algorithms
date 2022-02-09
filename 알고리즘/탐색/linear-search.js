const search = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) return i;
  }
  return -1;
};

const arr = [2, 4, 8, 1, 3];
console.log(search(arr, 1));
