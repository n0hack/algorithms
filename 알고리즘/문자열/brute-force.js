const text = 'ABABCDEFGHA';
const pattern = 'ABC';

let i, j, match;
for (i = 0; i <= text.length - pattern.length; i++) {
  match = true;
  for (j = 0; j < pattern.length; j++) {
    if (text[i + j] !== pattern[j]) {
      match = false;
      break;
    }
  }
  if (match) break;
}

if (match) console.log(`매칭되는 문자열이 ${i}인덱스에 있습니다.`);
else console.log('매칭되는 문자열이 없습니다.');
