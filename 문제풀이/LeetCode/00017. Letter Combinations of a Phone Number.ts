// Runtime (63ms, 10.78%) / Memory (42.74MB, 74.51%)
import { test } from './utils/test';

function letterCombinations(digits: string): string[] {
  if (!digits) return [];

  const table: Record<string, string> = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  const result: string[] = [];

  const dfs = (index: number, path: string) => {
    if (path.length === digits.length) {
      result.push(path);
      return;
    }

    for (; index < digits.length; index++) {
      for (const ch of table[digits[index]]) {
        dfs(index + 1, path + ch);
      }
    }
  };

  dfs(0, '');

  return result;
}

test(() => letterCombinations('23'));
test(() => letterCombinations(''));
test(() => letterCombinations('2'));
