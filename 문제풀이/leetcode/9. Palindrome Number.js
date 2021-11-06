/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  x = [...String(x)];

  if (x.length === 1) return true;
  else {
    while (x.length > 1) {
      if (x.pop() !== x.shift()) return false;
    }
    return true;
  }
};

console.log(isPalindrome(11));
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(-101));
