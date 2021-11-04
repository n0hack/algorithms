const solution = (arr) => {
  let min = arr.reduce((a, b) => (a < b ? a : b));

  arr.splice(
    arr.findIndex((v) => v === min),
    1
  );
  return arr.length === 0 ? [-1] : arr;
};

solution([4, 3, 2, 1]);
solution([10]);
