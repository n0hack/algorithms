function isPalindrome(x: number): boolean {
  // 선언적인 코드라 깔끔하지만 runtime이 약간 더 걸림
  // 10ms 정도라, 유의미한 차이는 아니라 생각
  const reserved = `${x}`.split('').reverse().join('');
  return `${x}` === reserved;

  // const text = x.toString();

  // for (let i = 0; i < text.length / 2; i++) {
  //   if (text[i] !== text[text.length - i - 1]) return false;
  // }
  // return true;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
