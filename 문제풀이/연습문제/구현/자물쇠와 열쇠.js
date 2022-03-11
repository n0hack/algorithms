const solution = (key, lock) => {
  const [n, m] = [key.length, lock.length];
  const map = Array.from({ length: m * 3 }, () => Array.from({ length: m * 3 }, () => 0));

  // map에 lock 복사

  // map을 전부 순회하며 key 붙여보기 (4방향 회전도 하고)

  console.log(map);
};

solution(
  [
    [0, 0, 0],
    [1, 0, 0],
    [0, 1, 1],
  ],
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ]
);
