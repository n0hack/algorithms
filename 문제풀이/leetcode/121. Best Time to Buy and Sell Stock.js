/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let profit = 0;
  let min = Number.MAX_VALUE;

  prices.forEach((price) => {
    min = Math.min(min, price);
    profit = Math.max(profit, price - min);
  });
  return profit;
};

maxProfit([7, 1, 5, 3, 6, 4]);
