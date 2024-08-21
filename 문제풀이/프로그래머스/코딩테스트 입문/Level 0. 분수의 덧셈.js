/**
 * 최대공약수를 구하는 함수
 * - 유클리드 호제법
 * @param {number} a
 * @param {number} b
 */
const gcd = (a, b) => {
  const r = a % b;
  return r === 0 ? b : gcd(b, r);
};

/**
 * 최소공배수를 구하는 함수
 * @param {number} a
 * @param {number} b
 */
const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

/**
 * @param {number} numer1
 * @param {number} denom1
 * @param {number} numer2
 * @param {number} denom2
 */
const solution = (numer1, denom1, numer2, denom2) => {
  const commonDenom = lcm(denom1, denom2);
  const commonNumer = numer1 * (commonDenom / denom1) + numer2 * (commonDenom / denom2);
  const commonGCD = gcd(commonDenom, commonNumer);

  return [commonNumer / commonGCD, commonDenom / commonGCD];
};
