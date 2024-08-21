const solution = (chicken) => {
  let result = 0;
  let coupon = chicken;
  let service = -1;

  while (service !== 0) {
    service = Math.floor(coupon / 10);
    coupon = coupon % 10;
    coupon += service;
    result += service;
  }

  return result;
};

console.log(solution(10));
console.log(solution(100));
console.log(solution(1081));
