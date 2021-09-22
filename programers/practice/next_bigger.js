function solution(n) {
  const count = n
    .toString(2)
    .split('')
    .filter((v) => v === '1').length;
  let answer = n;
  while (true) {
    answer++;
    if (
      answer
        .toString(2)
        .split('')
        .filter((v) => v === '1').length === count
    )
      return answer;
  }
  return answer;
}
