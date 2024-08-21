/**
 * @param {number} n 양꼬치 n인분
 * @param {number} k 음료수 k개
 */
const solution = (n, k) => {
  const services = ~~(n / 10);

  return n * 12000 + (k - services) * 2000;
};
