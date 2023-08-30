const compareArray = (arr1, arr2) => {
  let same = true;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      same = false;
      break;
    }
  }

  return same;
};

const solution = (arr) => {
  const list = [...arr];
  let answer = 0;

  while (true) {
    const prev = [...list];

    for (let i = 0; i < list.length; i++) {
      if (list[i] < 50 && list[i] % 2) {
        list[i] = list[i] * 2 + 1;
      } else if (list[i] >= 50 && !(list[i] % 2)) {
        list[i] = list[i] / 2;
      }
    }

    if (compareArray(prev, list)) {
      break;
    }
    answer++;
  }

  return answer;
};

console.log(solution([1, 2, 3, 100, 99, 98]));
