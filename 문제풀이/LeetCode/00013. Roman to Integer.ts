function romanToInt(s: string): number {
  const table: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const integers = s.split('').map((c) => table[c]);
  return integers.reduce((acc, x, i) => (x < integers[i + 1] ? acc - x : acc + x), 0);

  // let acc = 0;
  // for (let i = 0; i < s.length - 1; i++) {
  //   if (table[s[i]] >= table[s[i + 1]]) {
  //     acc += table[s[i]];
  //   } else {
  //     acc -= table[s[i]];
  //   }
  // }
  // acc += table[s[s.length - 1]];

  // return acc;
}

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
