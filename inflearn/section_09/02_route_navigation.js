function solution(n, m, arr) {
  let answer = 0;
  const map = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  );
  const check = Array.from({ length: n + 1 }, () => 0);

  arr.forEach(([s, e]) => {
    map[s][e] = 1;
  });

  function DFS(s) {
    if (s === 5) {
      answer++;
    } else {
      check[s] = 1;
      for (let i = 1; i <= n; i++) {
        if (check[i] === 1) continue;
        if (map[s][i] === 1) DFS(i);
      }
      check[s] = 0;
    }
  }

  DFS(1);

  return answer;
}

console.log(
  solution(5, 9, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
