/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  return prices.reduce((profit, price, index) => {
    if (index > 0 && price > prices[index - 1]) {
      return profit + price - prices[index - 1];
    }
    return profit;
  }, 0);
};
