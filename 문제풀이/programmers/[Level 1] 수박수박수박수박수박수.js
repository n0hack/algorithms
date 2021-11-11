const solution = (n) => {
  let answer = "";
  for (let i = 0; i < n; i++) answer += i % 2 ? "박" : "수";
  return answer;
};

const solution2 = (n) => {
  // repeat 사용
  return "수박".repeat(n / 2) + (n % 2 ? "수" : "");
};

console.log(solution2(5));
