function solution(str) {
  const stack = [];

  for (const x of str) {
    console.log(x, stack);
    if (/\d/.test(x)) stack.push(x);
    else {
      const num2 = stack.pop();
      const num1 = stack.pop();
      stack.push(eval(`${num1}${x}${num2}`));
    }
  }

  return stack[0];
}

console.log(solution("352+*9-"));
