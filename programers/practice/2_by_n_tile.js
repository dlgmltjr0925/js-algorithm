function solution(n) {
  const arr = Array.from({ length: n + 1 }, () => 1);

  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1_000_000_007;
  }

  return arr[n];
}
