const countSort = (arr, n, exp) => {
  const temp = Array.from({ length: n }, () => 0);
  const count = Array.from({ length: 10 }, () => 0);

  arr.forEach((item) => count[Math.floor(item / exp) % 10]++);

  for (let i = 1; i < count.length; i++) {
    // 누적 도수분포표 생성
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    // 도수 분포표를 참조하여 인덱스를 계산
    temp[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }

  // 기존 배열에 값 복사
  for (let i = 0; i < n; i++) arr[i] = temp[i];
};

const radixSort = (arr) => {
  // 가장 큰 값의 자릿수만큼 반복
  const max = arr.reduce((pre, cur) => (pre > cur ? pre : cur));
  for (let exp = 1; Math.floor(max / exp) >= 1; exp *= 10) {
    countSort(arr, arr.length, exp);
  }
};

const arr = [170, 45, 75, 90, 802, 24, 2, 66];

radixSort(arr);
console.log(arr);
