/**
 * @param {number} age
 */
const solution = (age) => {
  return (age + '')
    .split('')
    .map((v) => String.fromCharCode(97 + +v))
    .join('');
};
