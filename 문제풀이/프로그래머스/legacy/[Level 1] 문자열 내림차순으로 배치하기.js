const solution = (s) => {
  const upper = [...s].filter((char) => /[A-Z]/.test(char)).sort((a, b) => b.localeCompare(a));
  const lower = [...s].filter((char) => /[a-z]/.test(char)).sort((a, b) => b.localeCompare(a));

  return lower.join("") + upper.join("");
};

const solution2 = (s) => {
  console.log([...s].sort().reverse().join(""));
};

solution2("ZbCczdeAfgB");
