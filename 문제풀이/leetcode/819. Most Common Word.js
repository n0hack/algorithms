/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = (paragraph, banned) => {
  const counter = {};

  const pArray = paragraph.toLowerCase().split(/[\W]+/g);
  pArray
    .filter((p) => p && !banned.includes(p))
    .forEach((p) => {
      if (p in counter) counter[p]++;
      else counter[p] = 1;
    });

  return Object.entries(counter).sort(([, a], [, b]) => b - a)[0][0];
};

console.log(mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ['hit']));
console.log(mostCommonWord('a.', []));
