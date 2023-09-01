const solution = (intStrs, k, s, l) => {
  return intStrs.map((v) => Number(v.slice(s, s + l))).filter((v) => v > k);
};

console.log(solution(['0123456789', '9876543210', '9999999999999'], 50000, 5, 5));
