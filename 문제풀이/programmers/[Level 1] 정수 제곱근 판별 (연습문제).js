const solution = (n) => {
  return n % Math.sqrt(n) === 0 ? (Math.sqrt(n) + 1) ** 2 : -1;
};
solution(121);
solution(3);
