import { test } from './utils/test';

const mostCommonWord = (paragraph: string, banned: string[]): string => {
  // Object
  const counter: Record<string, number> = {};
  const p = paragraph.toLowerCase().replace(/[^\w]/g, ' ').split(/\s+/).filter(Boolean);

  for (const word of p) {
    if (banned.includes(word)) continue;

    if (counter[word] === undefined) counter[word] = 1;
    else counter[word] += 1;
  }

  return Object.entries(counter).sort((a, b) => b[1] - a[1])[0][0];
};

test(() => mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ['hit']));
test(() => mostCommonWord('a.', []));
