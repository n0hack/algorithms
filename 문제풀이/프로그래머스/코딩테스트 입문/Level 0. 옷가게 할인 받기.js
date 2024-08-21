/**
 * @param {number} price
 */
const solution = (price) => {
  let discountRate = 1;

  if (price >= 500000) discountRate = 0.8;
  else if (price >= 300000) discountRate = 0.9;
  else if (price >= 100000) discountRate = 0.95;

  // Math.floor와 같은 역할
  return ~~(price * discountRate);
};
