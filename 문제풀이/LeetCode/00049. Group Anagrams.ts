import { test } from './utils/test';

const groupAnagrams = (strs: string[]): string[][] => {
  const anagrams: Record<string, string[]> = {};

  // 정렬을 통한 그룹화
  for (const str of strs) {
    const key = Array.from(str).sort().join('');
    if (anagrams[key] === undefined) anagrams[key] = [];
    anagrams[key].push(str);
  }

  return Object.values(anagrams);
};

test(() => groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
test(() => groupAnagrams(['']));
test(() => groupAnagrams(['a']));
