function solution(n, k, arr, m) {
  let answer = 0;
  const check = Array.from({ length: n }, () => 0);
  const temp = Array.from({ length: k }, () => 0);

  function DFS(L, S, sum) {
    if (L === k) {
      if (sum % m === 0) answer++;
    } else {
      for (let i = S; i < n; i++) {
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0, 0);

  return answer;
}

console.log(solution(5, 3, [2, 4, 5, 8, 12], 6));
