// 배열을 시계 방향으로 회전
const transpose = (matrix) => {
  return matrix.reduce((result, row) => {
    return row.map((_, i) => {
      return [row[i], ...(result[i] || [])];
    });
  }, []);
};

// 배열을 반시계 방향으로 회전
const transposeReverse = (matrix) => {
  return matrix.reduce((result, row) => {
    return row.map((_, i) => {
      return [...(result[i] || []), row[row.length - i - 1]];
    });
  }, []);
};

const array = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

console.log(transpose(array));
console.log(transposeReverse(array));
