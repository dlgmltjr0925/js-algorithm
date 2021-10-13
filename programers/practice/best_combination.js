function solution(n, s) {
  if (n > s) return [-1];
  const share = parseInt(s / n);
  let remain = s % n;
  const answer = Array.from({ length: n }, () => share);
  let i = n;
  while (remain--) {
    answer[--i]++;
  }
  return answer;
}
