// 3진법 뒤집기
function solution(n) {
  let answer = 0;
  const ternary = n.toString(3);

  for (let i = 0; i < ternary.length; i++) {
    answer += ternary[i] * 3 ** i;
  }

  return answer;
}
