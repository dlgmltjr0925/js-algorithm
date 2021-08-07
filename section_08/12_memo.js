function solution(n, r) {
  const arr = Array.from({ length: n }, () =>
    Array.from({ length: r }, () => 0)
  );

  function DFS(n, r) {
    if (r === n || r === 0) return 1;
    else if (arr[n - 1][r - 1]) return arr[n - 1][r - 1];
    else {
      arr[n - 1][r - 1] = DFS(n - 1, r - 1) + DFS(n - 1, r);
      return arr[n - 1][r - 1];
    }
  }

  return DFS(n, r);
}

console.log(solution(5, 3));
console.log(solution(33, 19));
