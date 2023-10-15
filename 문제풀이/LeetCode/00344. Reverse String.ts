import { test } from './utils/test';

const reverseString = (s: string[]): string[] => {
  return s.reverse();
};

test(() => reverseString(['h', 'e', 'l', 'l', 'o']));
test(() => reverseString(['H', 'a', 'n', 'n', 'a', 'h']));
