/**
 * @param {string} my_string
 * @param {number} n
 */
const solution = (my_string, n) => {
  return [...my_string].map((v) => v.repeat(n)).join('');
};
