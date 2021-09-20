function solution(c, n, arr) {
  let max = 0;

  function DFS(L, sum) {
    if (sum > c) return;
    else {
      if (sum > max) max = sum;
      if (L !== n) {
        DFS(L + 1, sum + arr[L]);
        DFS(L + 1, sum);
      }
    }
  }

  DFS(0, 0);

  return max;
}

console.log(solution(259, 5, [81, 58, 42, 33, 61]));
