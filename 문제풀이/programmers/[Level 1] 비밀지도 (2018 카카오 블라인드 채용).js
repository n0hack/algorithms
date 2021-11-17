const solution = (n, arr1, arr2) => {
  // 2진수로 변환
  const bArr1 = arr1.map((e) => e.toString(2).padStart(n, "0").split(""));
  const bArr2 = arr2.map((e) => e.toString(2).padStart(n, "0").split(""));

  // 두 배열을 체크하여, 요소의 값이 1인 경우 #으로 변환
  return bArr1.map((row, i) => row.map((_, j) => (bArr1[i][j] === "1" || bArr2[i][j] === "1" ? "#" : " ")).join(""));
};

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
