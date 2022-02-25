const solution = (s) => {
  let result = s.length;

  for (let step = 1; step < Math.floor(s.length / 2) + 1; step++) {
    let compressed = '';
    let prev = s.slice(0, step);
    let count = 1;

    for (let j = step; j < s.length; j += step) {
      if (prev === s.slice(j, j + step)) {
        count++;
      } else {
        compressed += `${count === 1 ? '' : count}${prev}`;
        prev = s.slice(j, j + step);
        count = 1;
      }
    }
    // 남은 문자에 대해 처리
    if (count >= 2) {
      compressed += `${count === 1 ? '' : count}${prev}`;
    } else {
      compressed += `${prev}`;
    }
    result = Math.min(result, compressed.length);
  }

  return result;
};

const inputs = ['aabbaccc', 'ababcdcdababcdcd', 'abcabcdede', 'abcabcabcabcdededededede', 'xababcdcdababcdcd'];
inputs.forEach((input) => console.log(solution(input)));
