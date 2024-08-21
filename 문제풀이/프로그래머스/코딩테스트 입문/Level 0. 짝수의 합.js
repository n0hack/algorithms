/**
 * @param {number} n
 */
const solution = (n) => {
  return Array.from({ length: n }, (_, i) => i + 1).reduce((sum, n) => {
    if (!(n % 2)) sum += n;
    return sum;
  }, 0);
};
