// 숫자를 다루는 것이 더 빠르긴 함
function solution(x) {
  const sum = Array.from(String(x)).reduce((a, b) => a + Number(b), 0);
  return x % sum === 0;
}
