const makePrimeTable = () => {
  const primes = Array.from({ length: 3001 }, () => true);
  // 숫자 0과 1은 소수가 아님
  primes[0] = false;
  primes[1] = false;

  // 에라토스테네스의 체
  for (let i = 2; i <= 3001; i++) {
    if (!primes[i]) continue;
    for (let j = i * 2; j <= 3001; j += i) {
      primes[j] = false;
    }
  }

  return primes;
};

const solution = (nums) => {
  const primes = makePrimeTable();
  const result = [];

  // 완전 탐색을 통해 모든 숫자를 더한 뒤, 소수가 맞는지 판별
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (primes[sum]) result.push(sum);
      }
    }
  }

  return result.length;
};

const inputs = [
  [1, 2, 3, 4],
  [1, 2, 7, 6, 4],
];
inputs.forEach((input) => console.log(solution(input)));
