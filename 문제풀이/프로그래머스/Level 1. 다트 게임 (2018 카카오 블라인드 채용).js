const solution = (dartResult) => {
  // 다트 점수를 배열로 가공
  dartResult = dartResult.match(/\d+|./g).map((v) => (Number.isNaN(Number(v)) ? v : parseInt(v)));
  let score = [0, 0, 0];
  let index = -1;

  for (let i = 0; i < dartResult.length; i++) {
    let now = dartResult[i];
    // 현재 참조 중인 요소가 점수인 경우
    if (typeof now === 'number') {
      score[++index] = now;
      continue;
    }
    // 현재 참조 중인 요소가 보너스, 옵션인 경우
    if (now === 'D') {
      score[index] **= 2;
    } else if (now === 'T') {
      score[index] **= 3;
    } else if (now === '*') {
      score[index] *= 2;
      if (index - 1 >= 0) score[index - 1] *= 2;
    } else if (now === '#') {
      score[index] *= -1;
    }
  }

  return score.reduce((a, b) => a + b);
};

const inputs = ['1S2D*3T', '1D2S#10S', '1D2S0T', '1S*2T*3S', '1D#2S*3S', '1T2D3D#', '1D2S3T*'];
inputs.forEach((input) => console.log(solution(input)));
