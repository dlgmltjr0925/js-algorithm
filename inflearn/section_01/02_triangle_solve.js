function solution(a, b, c) {
  let answer = "YES";
  let sum = a + b + c;
  let max = Math.max(a, b);
  max = Math.max(max, c);
  if (sum - max > max) answer = "NO";
  return answer;
}

console.log(solution(6, 7, 11));
