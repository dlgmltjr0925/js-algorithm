function solution(braket) {
  const stack = [];
  for (let x of braket) {
    if (x === "(") stack.push(x);
    else stack.pop();
  }
  return stack.length === 0 ? "YES" : "NO";
}

console.log(solution("(()(()))(()"));
