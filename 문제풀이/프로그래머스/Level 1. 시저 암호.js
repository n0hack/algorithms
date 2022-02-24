// map 메소드를 이용한 케이스
const solution = (s, n) => {
  const characters = [...s];

  // prettier-ignore
  return characters.map((character) => {
    if (character === ' ') return ' ';

    let ascii = character.charCodeAt();
    let crypt = ascii + n;

    // 현재 순회 중인 character가 알파벳 범위 안에 있는지 체크
    if ('a'.charCodeAt() <= ascii && ascii <= 'z'.charCodeAt()) {
      // 암호화를 했는데 범위를 벗어난 경우 값 보정
      if (crypt > 'z'.charCodeAt()) crypt -= 26;
    } else if ('A'.charCodeAt() <= ascii && ascii <= 'Z'.charCodeAt()) {
      // 암호화를 했는데 범위를 벗어난 경우 값 보정
      if (crypt > 'Z'.charCodeAt()) crypt -= 26;
    }

    return String.fromCharCode(crypt);
  }).join('');
};

// 정규 표현식을 이용한 케이스
const solution2 = (s, n) => {
  return s.replace(/\w/g, (character) => {
    let ascii = character.charCodeAt();
    let crypt = ascii + n;

    // 현재 순회 중인 character가 알파벳 범위 안에 있는지 체크
    if ('a'.charCodeAt() <= ascii && ascii <= 'z'.charCodeAt()) {
      // 암호화를 했는데 범위를 벗어난 경우 값 보정
      if (crypt > 'z'.charCodeAt()) crypt -= 26;
    } else if ('A'.charCodeAt() <= ascii && ascii <= 'Z'.charCodeAt()) {
      // 암호화를 했는데 범위를 벗어난 경우 값 보정
      if (crypt > 'Z'.charCodeAt()) crypt -= 26;
    }

    return String.fromCharCode(crypt);
  });
};

const inputs = [
  ['AB', 1],
  ['z', 1],
  ['a B z', 4],
];
inputs.forEach((input) => console.log(solution(...input)));
