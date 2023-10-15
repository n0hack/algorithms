const isPalindrome = (s: string): boolean => {
  const alnum = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = alnum.split('').reverse().join('');

  return alnum === reversed;
};

isPalindrome('A man, a plan, a canal: Panama');
isPalindrome('race a car');
isPalindrome(' ');
