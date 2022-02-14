const board = Array.from({ length: 8 }, () => 0);
const flagA = Array.from({ length: board.length }, () => false);
const flagB = Array.from({ length: board.length * 2 - 1 }, () => false);
const flagC = Array.from({ length: board.length * 2 - 1 }, () => false);

const print = () => {
  for (let i = 0; i < board.length; i++) {
    process.stdout.write(` ${board[i]}`);
  }
  console.log();
};

const set = (i) => {
  for (let j = 0; j < board.length; j++) {
    if (!flagA[j] && !flagB[i + j] && !flagC[i - j + 7]) {
      board[i] = j;
      if (i === board.length - 1) {
        print();
      } else {
        flagA[j] = flagB[i + j] = flagC[i - j + 7] = true;
        set(i + 1);
        flagA[j] = flagB[i + j] = flagC[i - j + 7] = false;
      }
    }
  }
};

set(0);
