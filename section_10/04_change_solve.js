function solution(n, arr, m) {
  const DP = Array.from({ length: m + 1 }, () => 1000);
  dy[0] = 0;
  for (let i = 0; i < n; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  return dy[m];
}

console.log(solution(4, [1, 4, 5], 23));
