const solution = (food_times, k) => {
  const len = food_times.length;
  const sortTimes = food_times.map((time, index) => {
    return { index: index + 1, time };
  });
  sortTimes.sort((a, b) => a.time - b.time);

  for (let i = 0; i < len; i++) {
    const foodTime = sortTimes[i].time;
    const remains = len - i;
    const allEatTime = (foodTime - (i === 0 ? 0 : sortTimes[i - 1].time)) * remains;

    if (allEatTime > k) return sortTimes.slice(i).sort((a, b) => a.index - b.index)[k % remains].index;
    k -= allEatTime;
  }

  return -1;
};

const inputs = [[[3, 1, 2], 5]];
inputs.forEach((input) => console.log(solution(...input)));
