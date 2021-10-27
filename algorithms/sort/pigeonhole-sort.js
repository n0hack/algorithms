// 피존홀 정렬
// 각 요소 - 최소값을 한 후 피존홀 배열에 삽입
const pigeonholeSort = (arr) => {
  const min = arr.reduce((pre, cur) => (pre < cur ? pre : cur));
  const max = arr.reduce((pre, cur) => (pre > cur ? pre : cur));
  const pigeonhole = Array.from({ length: max }, () => []);

  arr.forEach((v) => {
    pigeonhole[v - min].push(v);
  });

  let i = 0;
  pigeonhole.forEach((v) => {
    while (v.length !== 0) {
      arr[i++] = v.pop();
    }
  });
};

const arr = [1, 5, 4, 2, 3];

console.log(arr);
pigeonholeSort(arr);
console.log(arr);
