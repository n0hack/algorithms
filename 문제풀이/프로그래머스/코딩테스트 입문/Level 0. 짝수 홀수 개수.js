/**
 * @param {number[]} num_list
 */
const solution = (num_list) => {
  return num_list.reduce(
    (res, v) => {
      v % 2 ? res[1]++ : res[0]++;
      return res;
    },
    [0, 0]
  );
};
