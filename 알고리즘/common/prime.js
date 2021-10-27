// 소수 찾기
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
