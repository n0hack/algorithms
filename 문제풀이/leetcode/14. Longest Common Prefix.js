/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  const [start, ...rest] = strs;

  let result = '';
  for (const [idx, char] of Object.entries(start)) {
    if (rest.every((rest) => rest[idx] === char)) result += char;
  }

  return result;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
