const solution = (s) => {
  const words = s.split(" ");

  return words
    .map((word) =>
      [...word]
        .map((char, index) => {
          if (index % 2) return char.toLowerCase();
          return char.toUpperCase();
        })
        .join("")
    )
    .join(" ");
};

const solution2 = (s) => {
  return s.toUpperCase().replace(/(\w)(\w)/g, (a) => a[0] + a[1].toLowerCase());
};

console.log(solution2("Lorem ipsum dolor sit amet."));
console.log(solution2("Hello World"));
console.log(solution2("try hello world"));
