// Recursive
const factorial = (n) => {
  if (n === 1) return 1;
  else return n * factorial(n - 1);
};

// Iterative
const factorial2 = (n) => {
  let res = 1;
  while (n) res *= n--;
  return res;
};

// 꼬리 재귀 (Tail Recursion)
// 재귀 호출이 끝나면, 아무 연산 없이 값만 반환하는 형태
const factorial3 = (n, total = 1) => {
  if (n === 1) return total;
  else return factorial3(n - 1, total * n);
};

console.log(factorial3(5));
