/**
 * @param {string[]} spell
 * @param {string[]} dic
 */
const solution = (spell, dic) => {
  return dic.some((d) => spell.sort().toString() === [...d].sort().toString()) ? 1 : 2;
};

console.log(solution(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo']));
console.log(solution(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw']));
