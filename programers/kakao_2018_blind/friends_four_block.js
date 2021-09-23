function solution(m, n, board) {
  let answer = 0;

  board = board.map((c) => c.split(''));
  // console.log(board);

  function match(r, c) {
    const block = board[r][c];
    return (
      board[r + 1][c] === block &&
      board[r][c + 1] === block &&
      board[r + 1][c + 1] === block
    );
  }

  let count;

  do {
    count = 0;

    const visit = Array.from({ length: m }, (_, r) => {
      return Array.from({ length: n }, (_, c) => 0);
    });

    // 제거 될 블록 확인
    for (let r = 0; r < m - 1; r++) {
      for (let c = 0; c < n - 1; c++) {
        if (board[r][c] !== ' ' && match(r, c)) {
          // console.log(r, c);
          for (let i = r; i < r + 2; i++) {
            for (let j = c; j < c + 2; j++) {
              if (visit[i][j] === 0) {
                count++;
                visit[i][j] = 1;
              }
            }
          }
        }
      }
    }

    // 블록 재정렬
    for (let c = 0; c < n; c++) {
      const queue = [];
      for (let r = m - 1; r >= 0; r--) {
        if (visit[r][c] === 0) queue.push(board[r][c]);
      }
      for (let r = m - 1; r >= 0; r--) {
        board[r][c] = queue.shift() || ' ';
      }
    }

    answer += count;
    // console.log(count, board)
  } while (count !== 0);

  return answer;
}
