/**
 * @param {number[]} num_list
 * @param {number} n
 */
const solution = (num_list, n) => {
  const res = [];
  while (num_list.length > 0) {
    res.push(num_list.splice(0, n));
  }
  return res;
};
