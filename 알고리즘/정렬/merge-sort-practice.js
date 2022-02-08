// 정렬 된 배열을 병합하는 알고리즘
const merge = (a, b, out) => {
  // 포인터(인덱스)
  let [pa, pb, po] = [0, 0, 0];

  while (pa < a.length && pb < b.length) {
    out[po++] = a[pa] <= b[pb] ? a[pa++] : b[pb++];
  }
  while (pa < a.length) out[po++] = a[pa++];
  while (pb < b.length) out[po++] = b[pb++];
};

const a = [2, 4, 6, 8, 11, 13];
const b = [1, 2, 3, 4, 9, 16, 21];
const out = [];

merge(a, b, out);
console.log(out);
