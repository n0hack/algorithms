const solution = (t, p) => {
  let answer = 0;

  for (let i = 0; i < t.length - p.length + 1; i++) {
    const substr = t.slice(i, p.length + i);
    if (+substr <= +p) answer += 1;
  }

  return answer;
};

console.log(solution('3141592', '271'));
console.log(solution('500220839878', '7'));
console.log(solution('10203', '15'));
