const solution = (s, n) => {
  return s.replace(/\w/g, (a) => {
    let ascii = a.charCodeAt();
    let temp = ascii + n;

    if ("a".charCodeAt() <= ascii && ascii <= "z".charCodeAt()) {
      if (temp > "z".charCodeAt()) temp -= 26;
    } else {
      if (temp > "Z".charCodeAt()) temp -= 26;
    }
    return String.fromCharCode(temp);
  });
};

const solution2 = (s, n) => {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = upper.toLowerCase();
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char === " ") {
      answer += " ";
      continue;
    }

    let inArray = upper.includes(char) ? upper : lower;
    let idx = inArray.indexOf(char) + n;
    if (idx >= inArray.length) idx -= inArray.length;
    answer += inArray[idx];
  }
  return answer;
};

console.log(solution2("AB", 1));
console.log(solution2("z", 1));
console.log(solution2("a B z", 4));
