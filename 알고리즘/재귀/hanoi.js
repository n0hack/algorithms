// Recursive
const hanoi = (n, from, mid, to) => {
  if (n === 1) console.log(`${from} --> ${to}`);
  else {
    hanoi(n - 1, from, to, mid);
    console.log(`${from} --> ${to}`);
    hanoi(n - 1, mid, from, to);
  }
};

// Iterative
const hanoi2 = (n, from, mid, to) => {
  const stack = [];

  while (true) {
    while (n > 1) {
      stack.push([n, from, mid, to]);
      [n, from, mid, to] = [n - 1, from, to, mid];
    }
    console.log(`${from} --> ${to}`);
    if (stack.length !== 0) {
      [n, from, mid, to] = stack.pop();
      console.log(`${from} --> ${to}`);
      [n, from, mid, to] = [n - 1, mid, from, to];
    } else {
      break;
    }
  }
};

// hanoi(3, 'A', 'B', 'C');
hanoi2(3, 'A', 'B', 'C');
