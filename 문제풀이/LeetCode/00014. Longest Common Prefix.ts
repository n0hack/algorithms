function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  let possiblePrefix = '';

  while (strs.every((str) => str.startsWith(possiblePrefix))) {
    const newPossiblePrefix = strs[0].substring(0, possiblePrefix.length + 1);

    if (newPossiblePrefix.length > possiblePrefix.length) {
      possiblePrefix = newPossiblePrefix;
    } else if (newPossiblePrefix.length === possiblePrefix.length) {
      return possiblePrefix;
    } else {
      break;
    }
  }

  return possiblePrefix.slice(0, -1);

  // let res = '';

  // for (let i = 0; i < strs[0].length; i++) {
  //   let temp = strs[0][i];
  //   let ret = false;
  //   for (let j = 0; j < strs.length; j++) {
  //     if (temp !== strs[j][i]) {
  //       ret = true;
  //       break;
  //     }
  //   }
  //   if (ret) break;
  //   res += temp;
  // }

  // return res;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
