function solution(n, str) {
  let answer = 0;
  const board = str
    .split(" ")
    .map((row) => row.split("").map((n) => parseInt(n)));

  const dx = [1, 1, 0, -1, -1, -1, 0, 1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function BFS(x, y) {
    const queue = [[x, y]];
    while (queue.length) {
      const [x, y] = queue.shift();
      board[x][y] = 0;
      for (let i = 0; i < 8; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
          queue.push([nx, ny]);
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        answer++;
        BFS(i, j);
      }
    }
  }

  return answer;
}

console.log(
  solution(7, `1100010 0110110 0100000 0001011 1101100 1000100 1010100`)
);
