// 재귀함수 (최대공약수)
// 유클리드 호제법
// Greatest Common Divisor
const gcd = (n, m) => {
  if (n < m) [n, m] = [m, n];

  let r = n % m;
  return r === 0 ? m : gcd(m, r);
};

// 단순계산 (최소공배수)
// Lease Common Multiple
const lcm = (n, m) => Math.floor((n * m) / gcd(n, m));

// 반복문 (최대공약수)
// function solution(n, m) {
//   if (n < m) [n, m] = [m, n];

//   while (n % m !== 0) {
//     [n, m] = [m, n % m];
//   }
//   console.log(m);
// }

function solution(n, m) {
  const result = [];
  result.push(gcd(n, m));
  result.push(lcm(n, m));
  return result;
}

// console.log(solution(3, 12));
// console.log(solution(2, 5));

// function greatestCommonDivisor(a, b) {return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);}
// function leastCommonMultipleOfTwo(a, b) {return (a * b) / greatestCommonDivisor(a, b);}
// function gcdlcm(a, b) {
//     return [greatestCommonDivisor(a, b),leastCommonMultipleOfTwo(a, b)];
// }

function solution2(n, m) {
  let nm;
  let r;
  for (nm = n * m; (r = n % m); n = m, m = r);
  return [m, nm / m];
}

console.log(solution2(3, 12));
console.log(solution2(2, 5));

// function gcdlcm(a, b) {
//   var r;
//   for(var ab= a*b;r = a % b;a = b, b = r){}
//   return [b, ab/b];
// }
