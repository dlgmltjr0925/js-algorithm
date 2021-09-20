function solution(n) {
  const DP = Array.from({ length: n + 2 }, () => 1);
  for (let i = 2; i <= n + 1; i++) {
    DP[i] = DP[i - 1] + DP[i - 2];
  }
  return DP[n + 1];
}

console.log(solution(7));
