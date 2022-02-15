const log = console.log;

/**
 * 연산자의 우선순위를 구하는 함수
 * @param {string} operator
 * @param {boolean} inStack
 * @returns {number} priority
 */
const getPriority = (operator, inStack) => {
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
};

/**
 * 중위 표현식을 후위 표현식으로 변환하는 함수
 * @param {string} infix
 * @returns {string} postfix
 */
const infixToPostfix = (infix) => {
  const operators = ['(', ')', '+', '-', '*', '/'];
  const stack = [];
  const postfix = [];

  infix = infix.split(' ');
  infix.forEach((token) => {
    if (operators.includes(token)) {
      if (token === ')') {
        // 토큰이 ')' 연산자인 경우, '('를 만날 때까지 Postfix에 삽입
        let popped = stack.pop();
        while (popped !== '(') {
          postfix.push(popped);
          popped = stack.pop();
        }
      } else {
        if (stack.length === 0) {
          stack.push(token);
        } else {
          // 최상위 노드와 토큰의 연산자 우선순위 비교
          // 이 과정이 없으면 '1 - 3 * 2'의 후위 표현식이 '1 3 - 2 *'가 됨
          let popped = stack.pop();
          if (getPriority(popped, true) > getPriority(token, false)) {
            postfix.push(popped);
          } else {
            stack.push(popped);
          }
          stack.push(token);
        }
      }
    } else {
      // 토큰이 피연산자인 경우 Postfix에 삽입
      postfix.push(token);
    }
  });

  // 스택의 남은 노드(연산자)를 모두 후위에 붙임
  while (stack.length !== 0) {
    postfix.push(stack.pop());
  }

  return postfix.join(' ');
};

/**
 * 후위 표현식을 계산하는 함수
 * @param {string} postfix
 * @returns {number} result
 */
const calculate = (postfix) => {
  const operators = ['+', '-', '*', '/'];
  const stack = [];

  postfix.split(' ').forEach((token) => {
    if (operators.includes(token)) {
      let operand1 = parseFloat(stack.pop());
      let operand2 = parseFloat(stack.pop());
      let temp;

      if (token === '+') temp = operand2 + operand1;
      else if (token === '-') temp = operand2 - operand1;
      else if (token === '*') temp = operand2 * operand1;
      else if (token === '/') temp = operand2 / operand1;

      stack.push(temp);
    } else {
      stack.push(token);
    }
  });

  return stack[0];
};

log(calculate(infixToPostfix('1 + 3')));
log(calculate(infixToPostfix('23 / 7 + 12')));
log(calculate(infixToPostfix('( 117.32 + 83 ) * 49')));
log(calculate(infixToPostfix('1 - 3 * 2')));
