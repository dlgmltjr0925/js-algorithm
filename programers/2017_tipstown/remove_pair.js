function solution(s) {
  const stack = [];

  for (const c of s) {
    stack.push(c);

    let lastIndex = stack.length - 1;

    while (lastIndex > 0 && stack[lastIndex] === stack[lastIndex - 1]) {
      stack.pop();
      stack.pop();
      lastIndex = stack.length - 1;
    }
  }

  return stack.length === 0 ? 1 : 0;
}
