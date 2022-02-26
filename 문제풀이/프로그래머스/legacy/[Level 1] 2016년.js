const log = console.log;

const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const solution = (a, b) => {
  let start = 1;

  let days = 0;
  for (let mon = 0; mon < a - 1; mon++) days += month[mon];
  days += b - start;

  return week[days % 7];
};

log(solution(5, 24));
// log(solution(5, 24));
