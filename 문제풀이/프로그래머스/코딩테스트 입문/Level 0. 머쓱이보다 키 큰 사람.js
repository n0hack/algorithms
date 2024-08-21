/**
 * @param {number[]} array
 * @param {number} height
 */
const solution = (array, height) => {
  return array.filter((v) => v > height).length;
};
