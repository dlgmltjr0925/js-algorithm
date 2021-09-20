function solution(str) {
  let answer = 0;
  const maze = str
    .split(" ")
    .map((str) => str.split("").map((n) => parseInt(n)));

  const n = maze.length;

  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];

  function DFS(x, y, l) {
    if (x === 6 && y === 6) {
      return answer++;
    }
    maze[x][y] = 1;
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && maze[nx][ny] === 0) {
        DFS(nx, ny, l + 1);
      }
    }
    maze[x][y] = 0;
  }

  DFS(0, 0, 0);

  return answer;
}

console.log(
  solution(`0000000 0111110 0001000 1101011 1100001 1101100 1000000`)
);
