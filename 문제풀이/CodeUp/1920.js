const toBinary = (n) => {
  if (n <= 1) {
    process.stdout.write(`${n}`);
  } else {
    toBinary(Math.floor(n / 2));
    process.stdout.write(`${n % 2}`);
  }
};
toBinary(11);
