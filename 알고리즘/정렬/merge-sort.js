const mergeSort = (arr, left, right) => {
  if (left < right) {
    const center = Math.floor((left + right) / 2);

    mergeSort(arr, left, center);
    mergeSort(arr, center + 1, right);

    const temp1 = [];
    const temp2 = [];
    let pa = 0;
    let pb = 0;

    for (let i = left; i <= center; i++) temp1.push(arr[i]);
    for (let j = center + 1; j <= right; j++) temp2.push(arr[j]);

    let po = left;
    while (pa < temp1.length && pb < temp2.length) {
      arr[po++] = temp1[pa] <= temp2[pb] ? temp1[pa++] : temp2[pb++];
    }
    while (pa < temp1.length) arr[po++] = temp1[pa++];
    while (pb < temp2.length) arr[po++] = temp2[pb++];
  }
};

// 반복문 줄인 버전
const mergeSort2 = (arr, left, right) => {
  if (left < right) {
    const center = Math.floor((left + right) / 2);
    const buff = [];
    let p = 0;
    let i;
    let j = 0;
    let k = left;

    mergeSort2(arr, left, center);
    mergeSort2(arr, center + 1, right);

    for (i = left; i <= center; i++) buff[p++] = arr[i];
    while (i <= right && j < p) arr[k++] = buff[j] <= arr[i] ? buff[j++] : arr[i++];
    while (j < p) arr[k++] = buff[j++];
  }
};

const arr = [7, 22, 5, 11, 32, 120, 68, 70];
// mergeSort(arr, 0, arr.length - 1);
mergeSort2(arr, 0, arr.length - 1);
console.log(arr);
