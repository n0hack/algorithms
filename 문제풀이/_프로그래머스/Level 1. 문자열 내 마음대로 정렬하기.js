const solution = (strings, n) => {
  return strings.sort((a, b) => {
    // a[n]과 b[n]이 같다면, 문자열 자체를 두고 사전 순서 비교
    if (a[n] === b[n]) return a.localeCompare(b);
    else return a[n].localeCompare(b[n]);
  });
};

const inputs = [
  [['sun', 'bed', 'car'], 1],
  [['abce', 'abcd', 'cdx'], 2],
];
inputs.forEach((input) => console.log(solution(...input)));
