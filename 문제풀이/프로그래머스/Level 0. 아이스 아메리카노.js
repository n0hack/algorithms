const solution = (money) => {
  const n = Math.floor(money / 5500);
  return [n, money - n * 5500];
};
