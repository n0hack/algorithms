const solution = (my_string, queries) => {
  let answer = my_string;

  for (const [s, e] of queries) {
    answer =
      answer.slice(0, s) +
      answer
        .slice(s, e + 1)
        .split('')
        .reverse()
        .join('') +
      answer.slice(e + 1);
  }

  return answer;
};

console.log(
  solution('rermgorpsam', [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
);
