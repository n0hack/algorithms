const getPrimeList = (n, callback) => {
  const temp = Array.from({ length: n }, () => true);
  const ret = [];

  for (let i = 2; i <= n; i++) {
    if (temp[i - 1]) {
      ret.push(i);
      for (let j = i * 2; j <= n; j += i) {
        temp[j - 1] = false;
      }
    }
  }
  callback(ret);
};
getPrimeList(50, console.log);
