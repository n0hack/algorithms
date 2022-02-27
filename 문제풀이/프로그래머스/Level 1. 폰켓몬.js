const solution = (nums) => {
  // 중복 제거
  const answer = [...new Set(nums)];
  // N/2 마리
  const num = nums.length / 2;

  return answer.length > num ? num : answer.length;
};

const inputs = [
  // nums
  [3, 1, 2, 3],
  [3, 3, 3, 2, 2, 4],
  [3, 3, 3, 2, 2, 2],
];
inputs.forEach((input) => console.log(solution(input)));
