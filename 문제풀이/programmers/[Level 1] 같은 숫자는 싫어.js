const solution = (arr) => {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) continue;
    else answer.push(arr[i]);
  }

  return answer;
};

const solution2 = (arr) => {
  return arr.filter((val, idx) => {
    console.log(arr[idx + 1]);
    return val !== arr[idx + 1];
  });
};

console.log(solution2([1, 1, 3, 3, 0, 1, 1]));
console.log(solution2([4, 4, 4, 3, 3]));
