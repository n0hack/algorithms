const solution = (s) => {
  const left = [];
  let right = 0;

  [...s].forEach((ch) => {
    if (Number.isNaN(parseInt(ch))) left.push(ch);
    else right += parseInt(ch);
  });

  left.sort();
  return left.join('') + right;
};

const inputs = ['K1KA5CB7', 'AJKDLSI412K4JSJ9D'];
inputs.forEach((input) => console.log(solution(input)));
