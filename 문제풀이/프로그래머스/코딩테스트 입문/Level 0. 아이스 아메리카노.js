/**
 * @param {number} money
 */
const solution = (money) => {
  const PRICE = 5500;
  return [Math.floor(money / PRICE), money % PRICE];
};
