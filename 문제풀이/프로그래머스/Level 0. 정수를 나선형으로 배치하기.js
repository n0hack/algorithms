const solution = (n) => {
  const res = Array.from(new Array(n), () => new Array(n).fill(0));
  const move = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let [y, x, dir, num] = [0, 0, 0, 1];

  while (num <= n * n) {
    res[y][x] = num;

    let nextY = y + move[dir][0];
    let nextX = x + move[dir][1];

    if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= n || res[nextY][nextX] !== 0) {
      dir = (dir + 1) % 4;
      nextY = y + move[dir][0];
      nextX = x + move[dir][1];
    }
    y = nextY;
    x = nextX;
    num++;
  }

  // const res = Array.from({ length: n }, () => new Array(n).fill(0));
  // const direction = {
  //   top: [-1, 0],
  //   right: [0, 1],
  //   bottom: [1, 0],
  //   left: [0, -1],
  // };
  // let d = 'right';
  // let [y, x] = [0, -1];
  // let [num, max] = [1, n * n];

  // while (num <= max) {
  //   const [nextY, nextX] = [y + directions[d][0], x + directions[d][1]];
  //   if (res?.[nextY]?.[nextX] === undefined || res?.[nextY]?.[nextX] !== 0) {
  //     if (d === 'top') d = 'right';
  //     else if (d === 'right') d = 'bottom';
  //     else if (d === 'bottom') d = 'left';
  //     else if (d === 'left') d = 'top';
  //     continue;
  //   }
  //   [y, x] = [nextY, nextX];
  //   res[y][x] = num;
  //   num++;
  // }

  return res;
};

console.log(solution(4));
console.log(solution(5));
