const solution = (my_string, m, c) => {
  const regex = new RegExp(`.{${m}}`, 'g');
  return my_string.match(regex).reduce((text, char) => text + char[c - 1], '');
};

console.log(solution('ihrhbakrfpndopljhygc', 4, 2));
console.log(solution('programmers', 1, 1));
