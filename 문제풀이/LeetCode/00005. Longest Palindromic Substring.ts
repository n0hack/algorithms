import { test } from './utils/test';

const search = (s: string, left: number, right: number): string => {
  while (0 <= left && right < s.length && s[left] === s[right]) {
    left -= 1;
    right += 1;
  }

  return s.slice(left + 1, right);
};

const longestPalindrome = (s: string): string => {
  if (s.length < 2 || s === [...s].reverse().join('')) return s;

  let result = '';
  for (let i = 0; i < s.length - 1; i++) {
    // 짝수와 홀수에 대한 투 포인터로 모든 케이스 검색
    const s1 = search(s, i, i + 1);
    const s2 = search(s, i, i + 2);

    const longer = s1.length > s2.length ? s1 : s2;

    if (result.length < longer.length) result = longer;
  }

  return result;
};

test(() => longestPalindrome('babad'));
test(() => longestPalindrome('cbbd'));
