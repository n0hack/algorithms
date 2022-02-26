const solution = (n, arr1, arr2) => {
  // OR 연산
  const temp = arr1.map((v, i) => (v | arr2[i]).toString(2).padStart(n, '0').split(''));
  return temp.map((col) => col.map((v) => (v === '1' ? '#' : ' ')).join(''));
};

const inputs = [
  [5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]],
  [6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]],
];
inputs.forEach((input) => console.log(solution(...input)));
