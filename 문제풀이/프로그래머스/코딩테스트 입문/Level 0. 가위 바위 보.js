/**
 * @param {string} rsp
 */
const solution = (rsp) => {
  return [...rsp].reduce((res, ch) => {
    if (ch === '2') res += '0';
    else if (ch === '0') res += '5';
    else if (ch === '5') res += '2';
    return res;
  }, '');
};
