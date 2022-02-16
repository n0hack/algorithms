const collatz = (n) => {
  process.stdout.write(`${n}`);
  if (n === 1) return;
  else process.stdout.write(` -> `);

  if (n % 2) collatz(3 * n + 1);
  else collatz(Math.floor(n / 2));
};

collatz(5);
