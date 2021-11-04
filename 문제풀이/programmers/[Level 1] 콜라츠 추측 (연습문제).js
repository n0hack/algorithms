const solution = (num) => {
  let result = 0;

  while (num !== 1 && result !== 500) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    result++;
  }

  return num === 1 ? result : -1;
};

solution(6);
solution(16);
solution(626331);
