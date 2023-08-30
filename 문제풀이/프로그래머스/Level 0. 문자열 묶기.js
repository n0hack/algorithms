const solution = (strArr) => {
  const cache = {};

  for (let i = 0; i < strArr.length; i++) {
    if (cache[strArr[i].length]) continue;

    cache[strArr[i].length] = strArr.filter((v) => v.length === strArr[i].length).length;
  }

  return Math.max(...Object.values(cache));
};

console.log(solution(['a', 'bc', 'd', 'efg', 'hi']));
