// Runtime (73ms, 73.45%) / Memory (48.88MB, 45.69%)
import { test } from './utils/test';

function lengthOfLongestSubstring(s: string): number {
  const hash: Record<string, number> = {};
  let [maxLength, start] = [0, 0];

  [...s].forEach((ch, index) => {
    // 이미 존재하는 경우, 시작 지점 변경
    if (ch in hash && start <= hash[ch]) {
      start = hash[ch] + 1;
    } else {
      // 최대 길이 갱신
      maxLength = Math.max(maxLength, index - start + 1);
    }
    hash[ch] = index;
  });

  return maxLength;
}

test(() => lengthOfLongestSubstring('abcabcbb'));
test(() => lengthOfLongestSubstring('bbbbb'));
test(() => lengthOfLongestSubstring('pwwkew'));
