import { test } from './utils/test';

const maxProfit = (prices: number[]): number => {
  let profit = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    // 구매할 때의 가격은 항상 판매할 때 가격의 앞에 위치함
    min = Math.min(min, prices[i - 1]);
    profit = Math.max(profit, prices[i] - min);
  }

  return profit;
};

test(() => maxProfit([7, 1, 5, 3, 6, 4]));
test(() => maxProfit([7, 6, 4, 3, 1]));
