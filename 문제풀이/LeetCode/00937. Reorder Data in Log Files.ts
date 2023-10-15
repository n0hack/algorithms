import { test } from './utils/test';

const reorderLogFiles = (logs: string[]): string[] => {
  // [ [identifier, ...rest], ... ]
  const mapped = logs.map((v) => v.split(/\s+(.*)/).filter(Boolean));

  // Two types of logs
  const letterLogs = mapped.filter((v) => v[1].match(/^[a-z\s]+/));
  const digitLogs = mapped.filter((v) => v[1].match(/^[\d\s]+/));

  // sort
  letterLogs.sort((a, b) => {
    const res = a[1].localeCompare(b[1]);
    return res ? res : a[0].localeCompare(b[0]);
  });

  return letterLogs.concat(digitLogs).map((v) => v.join(' '));
};

test(() => reorderLogFiles(['dig1 8 1 5 1', 'let1 art can', 'dig2 3 6', 'let2 own kit dig', 'let3 art zero']));
test(() => reorderLogFiles(['a1 9 2 3 1', 'g1 act car', 'zo4 4 7', 'ab1 off key dog', 'a8 act zoo']));
