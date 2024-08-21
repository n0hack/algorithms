const solution = (s) => {
  // 문자열을 단어들로 분할
  let words = s.split(' ');

  // 각 단어를 순회하면서 짝, 홀수 인덱스 변환
  words = words.map((word) => {
    // 각 단어도 배열로 만든 후 처리하면 [T, r, Y], [H, e, L, l, O] 이런 식으로 만들어 짐
    // 그렇기 때문에 마지막에는 join으로 합쳐 TrY, HeLlO 이런 식으로 만들어 줘야 함
    return [...word]
      .map((char, index) => {
        if (index % 2 === 0) return char.toUpperCase();
        else return char.toLowerCase();
      })
      .join('');
  });

  // 변환된 단어들 사이사이 공백을 껴서 합침
  return words.join(' ');
};

const solution2 = (s) => {
  return s.toUpperCase().replace(/(\w)(\w)/g, (a) => a[0] + a[1].toLowerCase());
};

const inputs = ['try hello world'];
inputs.forEach((input) => console.log(solution(input)));
