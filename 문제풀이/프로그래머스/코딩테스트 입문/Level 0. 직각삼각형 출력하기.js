/**
 * @param {number} n
 */
const solution = (n) => {
  for (let i = 0; i < n; i++) {
    let star = '';
    for (let j = n - i - 1; j < n; j++) {
      star += '*';
    }
    console.log(star);
  }
};
