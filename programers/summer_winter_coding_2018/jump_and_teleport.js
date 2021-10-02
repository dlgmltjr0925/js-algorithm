function solution(n) {
  let answer = 1;
  const visit = {};

  let i = 1;
  visit[1] = 1;

  while (!visit[n]) {
    i *= 2;
    visit[i] = 1;
    if (i > n) {
      n -= i / 2;
      answer++;
      i = 1;
    }
  }

  return answer;
}
