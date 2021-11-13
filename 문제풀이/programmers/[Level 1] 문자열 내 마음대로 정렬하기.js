const solution = (strings, n) => {
  return strings.sort((a, b) => (a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])));
};

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));
