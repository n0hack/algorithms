/**
 * @param {number[]} numbers
 */
const solution = (numbers) => {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
};
