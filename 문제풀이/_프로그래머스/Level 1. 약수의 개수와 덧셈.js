const solution = (left, right) => {
  let result = 0;

  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }
    // 약수의 개수가 짝수인 수는 더하기
    if (count % 2 === 0) result += i;
    else result -= i;
  }

  return result;
};

const inputs = [
  // [left, right]
  [13, 17],
  [24, 27],
];
inputs.forEach((input) => console.log(solution(...input)));
