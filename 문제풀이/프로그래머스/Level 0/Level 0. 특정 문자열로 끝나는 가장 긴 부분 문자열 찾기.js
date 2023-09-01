const solution = (myString, pat) => myString.slice(0, myString.lastIndexOf(pat) + pat.length);

console.log(solution('AbCdEFG', 'dE'));
console.log(solution('AAAAaaaa', 'a'));
