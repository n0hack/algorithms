/**
 * @param {number} n
 */
const solution = (slice, n) => {
  let pizza = 1;
  while (pizza * slice < n) {
    pizza++;
  }
  return pizza;
};
