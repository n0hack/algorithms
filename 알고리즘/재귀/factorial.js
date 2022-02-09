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

console.log(factorial(5));
