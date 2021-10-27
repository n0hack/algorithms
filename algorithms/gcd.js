function gcdFromLoop(num1, num2) {
  if (num2 > num1) {
    [num1, num2] = [num2, num1];
  }
  while (num2 !== 0) {
    [num1, num2] = [num2, num1 % num2];
  }
  return num1;
}

function gcdFromRecursive(num1, num2) {
  if (num2 === 0) {
    return num1;
  } else {
    return gcdFromRecursive(num2, num1 % num2);
  }
}

console.log(gcdFromRecursive(220, 80));
