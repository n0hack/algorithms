import { test } from './utils/test';

const isAnagram = (s: string, t: string): boolean => {
  return [...s].sort().join('') === [...t].sort().join('');
};

test(() => isAnagram('anagram', 'nagaram'));
test(() => isAnagram('rat', 'car'));
