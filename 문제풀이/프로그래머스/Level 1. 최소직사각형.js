const solution = (sizes) => {
  let [w, h] = [0, 0];

  // 정렬 후 가로, 세로 최댓값 갱신
  sizes.forEach((size) => {
    size.sort((a, b) => a - b);
    w = Math.max(w, size[0]);
    h = Math.max(h, size[1]);
  });

  return w * h;
};

// prettier-ignore
const inputs = [
  [[60, 50], [30, 70], [60, 30], [80, 40]],
  [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]],
  [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]
]
inputs.forEach((input) => console.log(solution(input)));
