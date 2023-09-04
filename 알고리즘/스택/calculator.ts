/**
 * 연산자의 우선순위를 구하는 함수
 * @param operator 연산자
 * @param inStack 스택에 들어있던 연산자인지 여부
 */
const getPriority = (operator: string, inStack: boolean) => {
  let priority = -1;

  switch (operator) {
    case '+':
    case '-':
      priority = 1;
      break;
    case '*':
    case '/':
      priority = 2;
      break;
    case '(':
      priority = inStack ? 0 : 4;
      break;
    case ')':
      priority = 3;
      break;
  }

  return priority;
};

/**
 * 후위 표기법으로 변환하는 함수
 * @param infix 전위 표기법
 */
const getPostfix = (infix: string) => {
  const operators = ['(', ')', '+', '-', '*', '/'];
  const stack: any[] = [];
  const postfix: any[] = [];

  const tokens = infix.split(' ');
  tokens.forEach((token) => {
    // 연산자 여부
    if (operators.includes(token)) {
      // 토큰이 ')' 연산자인 경우, '('를 만날 때까지 postfix 삽입
      if (token === ')') {
        let popped = stack.pop();
        while (popped !== '(') {
          postfix.push(popped);
          popped = stack.pop();
        }
      } else {
        if (stack.length === 0) {
          stack.push(token);
        } else {
          const popped = stack.pop();
          // 연산자 우선순위 비교하여, 최상위 노드보다 우선순위가 높은 노드가 스택에 없도록 처리
          if (getPriority(popped, true) > getPriority(token, false)) {
            postfix.push(popped);
          } else {
            stack.push(popped);
          }
          stack.push(token);
        }
      }
    } else {
      // 토큰이 피연산자인 경우 postfix에 삽입
      postfix.push(token);
    }
  });

  while (stack.length !== 0) {
    postfix.push(stack.pop());
  }

  return postfix.join(' ');
};

/**
 * 후위 표현식을 계산하는 함수
 * @param postfix
 */
const calculate = (postfix: string) => {
  const operators = ['+', '-', '*', '/'];
  const stack: number[] = [];

  postfix.split(' ').forEach((token) => {
    if (operators.includes(token)) {
      const operand1 = stack.pop();
      const operand2 = stack.pop();

      if (!operand1 || !operand2) throw new Error('Error!');

      let res = 0;

      if (token === '+') res = operand2 + operand1;
      else if (token === '-') res = operand2 - operand1;
      else if (token === '*') res = operand2 * operand1;
      else if (token === '/') res = operand2 / operand1;

      stack.push(res);
    } else {
      stack.push(parseFloat(token));
    }
  });

  return stack[0];
};

console.log(calculate(getPostfix('1 + 3')));
console.log(calculate(getPostfix('23 / 7 + 12')));
console.log(calculate(getPostfix('( 117.32 + 83 ) * 49')));
console.log(calculate(getPostfix('1 - 3 * 2')));
console.log(calculate(getPostfix('1 + 3.334 / ( 4.28 * ( 110 - 7729 ) )')));
