function solution(a, b, c) {
  let answer = a < b ? a : b;
  answer = answer < c ? a : c;
  return answer;
}
