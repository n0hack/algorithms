const solution = (babbling) => {
  let answer = 0;

  const 가능한_발음 = ['aya', 'ye', 'woo', 'ma'];

  for (let i = 0; i < babbling.length; i++) {
    let word = babbling[i];

    while (1) {
      if (word.length === 0) answer++;

      let sliceIndex = -1;
      for (let j = 0; j < 가능한_발음.length; j++) {
        if (word.indexOf(가능한_발음[j]) === 0) {
          sliceIndex = j;
          break;
        }
      }

      if (sliceIndex !== -1) {
        word = word.slice(가능한_발음[sliceIndex].length);
      } else {
        break;
      }
    }
  }

  return answer;
};

console.log(solution(['aya', 'yee', 'u', 'maa', 'wyeoo']));
console.log(solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa']));
