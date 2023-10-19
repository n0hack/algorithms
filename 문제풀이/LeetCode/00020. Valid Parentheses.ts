// Runtime (59ms, 59.59%) / Memory (44.56MB, 48.08%)
import { test } from './utils/test';

function isValid(s: string): boolean {
  const stack: string[] = [];
  const table: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const ch of s.split('')) {
    if (['(', '{', '['].includes(ch)) stack.push(ch);
    else {
      const popped = stack.pop();
      if (popped === undefined || popped !== table[ch]) return false;
    }
  }

  return stack.length === 0;
}

test(() => isValid('()'));
test(() => isValid('()[]{}'));
test(() => isValid('(]'));
