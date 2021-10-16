/**
 * 에라스토테네스의 체를 이용해 소수 리스트 생성
 * @param {number} n
 * @returns 소수가 담긴 배열
 */
function getPrimeList(n) {
  const ret = [];
  const temp = Array.from({ length: n }, () => 0);

  for (let i = 2; i <= n; i++) {
    if (temp[i - 1] === 0) {
      ret.push(i);
      for (let j = i * 2; j <= n; j += i) {
        temp[j - 1] = 1;
      }
    }
  }

  return ret;
}

console.log(getPrimeList(50));
