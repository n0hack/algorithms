const print = (n) => {
  if (n >= 1) {
    process.stdout.write('*');
    print(n - 1);
  }
};

const solution = (start, end) => {
  if (start > end) return;
  print(start);
  if (start < end) console.log();
  solution(start + 1, end);
};

const n = 5;
solution(1, n);
