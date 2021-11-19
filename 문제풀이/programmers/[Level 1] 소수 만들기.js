const makePrimeTable = () => {
  const primes = Array.from({ length: 3000 }, (_, i) => i);
  primes[0] = -1;
  primes[1] = -1;

  for (let i = 2; i < 3000; i++) {
    for (let j = i * 2; j < 3000; j += i) {
      primes[j] = -1;
    }
  }

  return primes.filter((v) => v !== -1);
};

const solution = (nums) => {
  const primes = makePrimeTable();
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1 + i; j < nums.length; j++) {
      for (let k = 1 + j; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (primes.includes(sum)) result++;
      }
    }
  }
  console.log(result);
};

solution([1, 2, 3, 4]);
solution([1, 2, 7, 6, 4]);
