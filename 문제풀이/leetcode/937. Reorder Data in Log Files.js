/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = function (logs) {
  const digits = [];
  const letters = [];

  const removeIdentifier = (log) => log.slice(log.indexOf(' ') + 1);

  logs.forEach((log) => {
    if (/\d/.test(removeIdentifier(log))) digits.push(log);
    else letters.push(log);
  });

  const compare = (a, b) => {
    // 뒷 부분부터 비교해보고, 동일하다면 맨 앞 식별자를 통해 비교
    const n = removeIdentifier(a).localeCompare(removeIdentifier(b));
    return n === 0 ? a.localeCompare(b) : n;
  };

  return [...letters.sort(compare), ...digits];
};

console.log(reorderLogFiles(['dig1 8 1 5 1', 'let1 art can', 'dig2 3 6', 'let2 own kit dig', 'let3 art zero']));
console.log(reorderLogFiles(['a1 9 2 3 1', 'g1 act car', 'zo4 4 7', 'ab1 off key dog', 'a8 act zoo']));
