const solution = (arr) => {
  // 배열 내 가장 작은 값을 가진 요소와 인덱스를 구함
  const [minIndex, _] = arr.reduce(
    (a, b, index) => {
      if (a[1] > b) return [index, b];
    },
    [-1, 1e9]
  );
  // 가장 작은 값 제거
  arr.splice(minIndex, 1);

  return arr.length === 0 ? [-1] : arr;
};

const inputs = [[4, 3, 2, 1], [10]];
inputs.forEach((input) => console.log(solution(input)));
