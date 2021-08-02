function solution(str) {
  let answer = 5;

  const pipes = [
    [4, 9],
    [10, 13],
    [3, 16],
    [2, 17],
    [18, 21],
  ];

  const cutIndex = [];

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === "(" && str[i + 1] === ")") {
      for (let [start, end] of pipes) {
        if (start <= i && i < end) {
          answer++;
        }
      }
    }
  }

  return answer;
}

console.log(solution("()(((()())(())()))(())"));
console.log(solution("(((()(()()))(())()))(()())"));
