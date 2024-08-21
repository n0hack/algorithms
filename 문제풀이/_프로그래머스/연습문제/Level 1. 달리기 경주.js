const solution = (players, callings) => {
  let hash = players
    .map((v, i) => [v, i])
    .reduce((obj, cur) => {
      obj[cur[0]] = cur[1];
      obj[cur[1]] = cur[0];
      return obj;
    }, {});

  for (const calling of callings) {
    const idx = hash[calling];
    const [name1, name2] = [hash[idx - 1], hash[idx]];
    [hash[idx - 1], hash[idx]] = [hash[idx], hash[idx - 1]];
    [hash[name1], hash[name2]] = [hash[name2], hash[name1]];
  }

  return Object.entries(hash)
    .filter((v) => !Number.isNaN(Number(v[0])))
    .map((v) => v[1]);
};

console.time('s');
console.log(solution(['mumu', 'soe', 'poe', 'kai', 'mine'], ['kai', 'kai', 'mine', 'mine']));
console.timeEnd('s');
