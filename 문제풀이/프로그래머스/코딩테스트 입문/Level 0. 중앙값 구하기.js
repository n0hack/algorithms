/**
 * @param {number[]} array
 */
const solution = (array) => {
  return array.sort((a, b) => a - b)[~~(array.length / 2)];
};
