// 스택 계산기

/**
 * Get priority of operator
 * @param {string} operator
 * @param {boolean} inStack
 * @returns {number} priority
 */
function getPriority(operator, inStack) {
  if (operator === '+' || operator === '-') {
    return 1;
  } else if (operator === '*' || operator === '/') {
    return 2;
  } else if (operator === '(') {
    if (inStack) return 0;
    else return 5;
  } else if (operator === ')') {
    return 4;
  }
}

/**
 * Convert infix to postfix
 * @param {string} infix
 * @returns {string} postfix
 */
function getPostfix(infix) {
  const operators = ['(', ')', '+', '-', '*', '/'];
  const stack = [];
  const postfix = [];

  infix = infix.split(/[ ]+/);
  infix.forEach((v) => {
    if (operators.includes(v)) {
      if (v === ')') {
        let temp = stack.pop();
        while (temp !== '(') {
          postfix.push(temp);
          temp = stack.pop();
        }
      } else {
        if (stack.length === 0) {
          stack.push(v);
        } else {
          let temp = stack.pop();
          if (getPriority(temp, true) > getPriority(v, false)) {
            postfix.push(temp);
          } else {
            stack.push(temp);
          }
          stack.push(v);
        }
      }
    } else {
      postfix.push(v);
    }
  });

  while (stack.length !== 0) {
    postfix.push(stack.pop());
  }

  return postfix.join(' ');
}

/**
 * Calculate postfix
 * @param {string} postfix
 * @returns {number} result
 */
function calculatePostfix(postfix) {
  const stack = [];
  const operators = ['+', '-', '*', '/'];

  postfix.split(' ').forEach((v) => {
    if (operators.includes(v)) {
      let result;

      if (v === '+') result = Number(stack.pop()) + Number(stack.pop());
      else if (v === '-') result = Number(stack.pop()) - Number(stack.pop());
      else if (v === '*') result = Number(stack.pop()) * Number(stack.pop());
      else if (v === '/') result = Number(stack.pop()) / Number(stack.pop());

      stack.push(result);
    } else {
      stack.push(v);
    }
  });

  return stack[0];
}

console.log(calculatePostfix(getPostfix('1 + 3')));
console.log(calculatePostfix(getPostfix('23 / 7 + 12')));
console.log(calculatePostfix(getPostfix('( 117.32 + 83 ) * 49')));
console.log(calculatePostfix(getPostfix('1 - 3 * 2')));
