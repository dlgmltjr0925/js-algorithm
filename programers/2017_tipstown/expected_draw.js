function solution(n, a, b) {
  if (b < a) [a, b] = [b, a];

  function dfs(s, n) {
    if (a <= s + n && b > s + n) {
      return Math.log2(n) + 1;
    } else if (a <= s + n && b <= s + n) {
      return dfs(s, n / 2);
    } else {
      return dfs(s + n, n / 2);
    }
  }

  return dfs(0, n / 2);
}
