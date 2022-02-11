const text1 = 'Hello World';
const text2 = 'Aello World';

let i = 0;
let res = 0;
while (text1[i] && text2[i]) {
  if (text1[i] > text2[i]) {
    res = 1;
    break;
  } else if (text1[i] < text2[i]) {
    res = -1;
    break;
  }
  i++;
}
console.log(`두 문자열은 같은가요? ${res === 0}`);
