function solution(braket) {
  let answer = 0;
  const stack = [];

  for (let i = 0; i < braket.length; i++) {
    if (braket.charAt(i) === "(") {
      stack.push("");
    } else if (braket.charAt(i - 1) === "(") {
      stack.pop();
      answer += stack.length;
    } else {
      stack.pop();
      answer += 1;
    }
  }

  return answer;
}

console.log(solution("()(((()())(())()))(())"));
console.log(solution("(((()(()()))(())()))(()())"));
