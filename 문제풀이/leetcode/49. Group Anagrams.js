/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagrams = {};
  strs.forEach((str) => {
    // Array.from === [...]
    const t = [...str].sort().join('');

    if (t in anagrams) anagrams[t].push(str);
    else anagrams[t] = [str];
  });
  return Object.values(anagrams);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['a']));
