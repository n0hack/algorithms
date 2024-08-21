const solution = (n) => {
  // 소수 테이블을 만드는데, 일단은 1부터 n까지 모두 소수라 가정
  const primes = Array.from({ length: n + 1 }, () => true);
  // 0과 1은 소수가 아니니 false로 변경
  primes[0] = primes[1] = false;

  // 소수를 구할 때 사용하는 에라토스테네스의 체를 구현
  // 2는 소수지만, 2의 배수는 소수가 아니다.
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!primes[i]) continue;
    for (let j = i * 2; j <= n; j += i) {
      primes[j] = false;
    }
  }

  // true인 값들의 개수를 구해 반환
  return primes.filter((v) => v).length;
};

const inputs = [10, 5];
inputs.forEach((input) => console.log(solution(input)));
