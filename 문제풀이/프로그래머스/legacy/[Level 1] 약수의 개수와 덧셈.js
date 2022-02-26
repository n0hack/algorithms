const solution = (left, right) => {
  let result = 0;

  for (let num = left; num <= right; num++) {
    // 제곱근이 정수인 경우 약수의 개수는 홀수
    if (Number.isInteger(Math.sqrt(num))) result -= num;
    else result += num;
  }
  return result;
};

solution(13, 17);
