/**
 * @param {string} s
 * @return {string}
 */

const longestPalindrome = (s) => {
  const expand = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  };

  // 테스트가 필요 없는 경우
  if (s.length < 2 || s === [...s].reverse().join('')) return s;

  let answer = '';
  for (let i = 0; i < s.length - 1; i++) {
    const oneStep = expand(i, i + 1);
    const twoStep = expand(i, i + 2);
    console.log(oneStep, twoStep);
    if (answer.length < oneStep.length) answer = oneStep;
    if (answer.length < twoStep.length) answer = twoStep;
  }

  return answer;
};

log = console.log;
// log(longestPalindrome('babad'));
// log(longestPalindrome('cbbd'));
// log(longestPalindrome('a'));
log(longestPalindrome('ac'));
