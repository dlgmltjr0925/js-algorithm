function solution(n) {
  const DP = Array.from({ length: n + 1 }, () => 1);
  for (let i = 2; i <= n; i++) {
    DP[i] = DP[i - 1] + DP[i - 2];
  }

  return DP[n];
}

console.log(solution(7));
