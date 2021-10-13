function solution(n) {
  let answer = 0;
  const board = Array.from({ length: n }, () => {
    return Array.from({ length: n }, () => false);
  });

  function dfs(r, c) {
    // check
    for (let i = 1; i <= r; i++) {
      const nr = r - i;
      for (const d of [-1, 0, 1]) {
        const nc = c + d * i;
        if (nc >= 0 && nc < n && board[nr][nc]) return;
      }
    }

    if (r === n - 1) return answer++;

    board[r][c] = true;
    for (let i = 0; i < n; i++) {
      dfs(r + 1, i);
    }
    board[r][c] = false;
  }

  for (let i = 0; i < n; i++) {
    dfs(0, i);
  }

  return answer;
}
