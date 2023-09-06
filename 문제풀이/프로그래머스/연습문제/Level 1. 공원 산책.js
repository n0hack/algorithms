const MOVE = {
  N: [-1, 0],
  S: [1, 0],
  W: [0, -1],
  E: [0, 1],
};

const initMap = (park) => {
  const map = [];
  let start;

  for (let i = 0; i < park.length; i++) {
    const p = park[i];
    const startIndex = p.indexOf('S');

    if (startIndex > -1) start = [i, startIndex];
    map.push(p.split(''));
  }

  return { map, start };
};

const solution = (park, routes) => {
  const { map, start } = initMap(park);
  let now = start;

  for (const route of routes) {
    let [direction, walks] = route.split(' ').map((v, i) => (i % 2 ? Number(v) : v));
    let [ny, nx] = now;
    let movable = true;

    while (walks--) {
      [ny, nx] = [ny + MOVE[direction][0], nx + MOVE[direction][1]];

      if (ny < 0 || ny >= map.length || nx < 0 || nx >= map[0].length || map[ny][nx] === 'X') {
        movable = false;
      }
    }

    if (movable) {
      now = [ny, nx];
    }
  }

  return now;
};

console.log(solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1']));
console.log(solution(['SOO', 'OXX', 'OOO'], ['E 2', 'S 2', 'W 1']));
console.log(solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']));
