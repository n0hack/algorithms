import { test } from './utils/test';

const addBinary = (a: string, b: string): string => {
  if (a.length < b.length) {
    [a, b] = [b, a];
  }

  const arrA = Array.from(a).reverse();
  const arrB = Array.from(b).reverse();

  const addition = [
    ...arrA.map((v, i) => {
      if (arrB[i] !== undefined) return +v + +arrB[i];
      else return +v;
    }),
    0,
  ];

  let adder = 0;
  const result = addition
    .map((v) => {
      const res = v + adder;
      if (res < 2) {
        adder = 0;
        return res;
      } else {
        adder = 1;
        return res - 2;
      }
    })
    .reverse()
    .join('');

  return result[0] === '0' ? result.slice(1) : result;
};

test(() => addBinary('11', '1'));
test(() => addBinary('1010', '1011'));
test(() =>
  addBinary(
    '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
    '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'
  )
);
