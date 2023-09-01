const solution = (code) => {
  let mode = 0;
  let ret = '';

  for (let idx = 0; idx < code.length; idx++) {
    if (mode === 0) {
      if (code[idx] === '1') mode = 1;
      else {
        if (!(idx % 2)) ret += code[idx];
      }
    } else {
      if (code[idx] === '1') mode = 0;
      else {
        if (idx % 2) ret += code[idx];
      }
    }
  }

  return ret ? ret : 'EMPTY';
};

solution('abc1abc1abc');
