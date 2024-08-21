const expand = (v, k) => {
  let res = v;
  while (--k) {
    res += v;
  }
  return res;
};

function solution(picture, k) {
  var answer = [];

  for (let i = 0; i < picture.length; i++) {
    let text = '';
    let r = k;
    for (let j = 0; j < picture[i].length; j++) {
      text += expand(picture[i][j], k);
    }
    while (r--) {
      answer.push(text);
    }
  }

  return answer;
}

console.log(solution(['.xx...xx.', 'x..x.x..x', 'x...x...x', '.x.....x.', '..x...x..', '...x.x...', '....x....'], 2));
