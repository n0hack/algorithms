/**
 * @param {number[]} array
 */
const solution = (array) => {
  const map = new Map();

  for (const v of array) {
    map.set(v, (map.get(v) || 0) + 1);
  }

  const m = [...map].sort((a, b) => b[1] - a[1]);

  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
};
