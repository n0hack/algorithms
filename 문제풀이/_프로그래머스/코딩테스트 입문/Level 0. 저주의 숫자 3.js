function solution(n) {
  const table = new Array(101).fill(0);

  let value = 1;
  for (let i = 1; i < table.length; i++) {
    let exit = false;

    while (!exit) {
      if (!(value % 3 === 0 || `${value}`.includes('3'))) {
        table[i] = value;
        exit = true;
      }
      value++;
    }
  }

  return table[n];
}

console.log(solution(15));
console.log(solution(40));
