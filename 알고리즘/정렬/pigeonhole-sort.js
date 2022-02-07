const pigeonholeSort = (arr) => {
  const pigeonhole = {};
  let result = [];

  const min = Math.min(...arr);

  arr.forEach((item) => {
    const diff = item - min;
    if (pigeonhole[diff]) pigeonhole[diff].push(item);
    else pigeonhole[diff] = [item];
  });

  Object.keys(pigeonhole).forEach((key) => {
    result = result.concat(pigeonhole[key]);
  });

  return result;
};

const arr = [8, 3, 2, 7, 4, 6, 8];
console.log(pigeonholeSort(arr));
