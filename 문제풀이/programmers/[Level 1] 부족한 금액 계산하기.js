const solution = (price, money, count) => {
  const answer =
    Array.from({ length: count }, (_, i) => i + 1)
      .map((v) => v * price)
      .reduce((a, b) => a + b) - money;

  return answer > 0 ? answer : 0;
};

const solution2 = (price, money, count) => {
  const answer = (price * count * (count + 1)) / 2 - money;
  return answer > 0 ? answer : 0;
};

solution(3, 20, 4, 10);
