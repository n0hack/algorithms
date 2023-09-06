const solution = (name, yearing, photos) => {
  const map = new Map();

  for (let i = 0; i < name.length; i++) {
    map.set(name[i], yearing[i]);
  }

  return photos.map((photo) =>
    photo.reduce((acc, cur) => {
      if (map.has(cur)) acc += map.get(cur);
      return acc;
    }, 0)
  );
};

console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ]
  )
);
