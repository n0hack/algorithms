const solution = (participant, completion) => {
  const result = {};

  participant.forEach((p) => {
    if (p in result) result[p]++;
    else result[p] = 1;
  });
  completion.forEach((c) => {
    if (--result[c] === 0) delete result[c];
  });

  return Object.keys(result).join('');
};

const inputs = [
  [
    // participant
    ['leo', 'kiki', 'eden'],
    // completion
    ['eden', 'kiki'],
  ],
  [
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola'],
  ],
  [
    ['mislav', 'stanko', 'mislav', 'ana'],
    ['stanko', 'ana', 'mislav'],
  ],
];
inputs.forEach((input) => console.log(solution(...input)));
