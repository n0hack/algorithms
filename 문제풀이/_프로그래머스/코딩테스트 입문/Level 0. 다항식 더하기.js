const solution = (polynomial) => {
  const counter = [0, 0];

  polynomial
    .replaceAll(' ', '')
    .split('+')
    .forEach((v) => {
      const n = Number(v);
      if (Number.isNaN(n)) {
        if (v === 'x') counter[0] += 1;
        else counter[0] += parseInt(v);
      } else {
        counter[1] += n;
      }
    });

  const left = counter[0] === 0 ? '' : counter[0] === 1 ? 'x' : `${counter[0]}x`;
  const op = counter[0] === 0 || counter[1] === 0 ? '' : ' + ';
  const right = counter[1] === 0 ? '' : `${counter[1]}`;

  return left + op + right;
};

console.log(solution('3x + 7 + x'));
console.log(solution('x + x + x'));
console.log(solution('x'));
