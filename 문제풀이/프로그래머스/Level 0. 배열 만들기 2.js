function solution(l, r) {
  var answer = [];
  let arr = Array.from({ length: r - l + 1 }, (_, i) => i + l);

  for (const n of arr) {
    if (/^[05]+$/.test(`${n}`)) answer.push(n);
  }

  return answer.length === 0 ? [-1] : answer;
}

console.log(solution(5, 555));
console.log(solution(10, 20));
