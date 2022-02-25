const solution = (n) => {
  const arr = Array.from(String(n), (v) => parseInt(v));
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  if (left.reduce((a, b) => a + b) === right.reduce((a, b) => a + b)) return 'LUCKY';
  else return 'READY';
};

const inputs = [123402, 7755];
inputs.forEach((input) => console.log(solution(input)));
