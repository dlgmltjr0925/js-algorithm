const dr = [0, 1, 0, -1];
const dc = [1, 0, -1, 0];

function getValid(place) {
  const visit = Array.from({ length: 5 }, () => {
    return Array.from({ length: 5 }, () => 0);
  });

  function dfs(r, c, re) {
    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];
      if (
        nr >= 0 &&
        nr < 5 &&
        nc >= 0 &&
        nc < 5 &&
        visit[r][c] > visit[nr][nc]
      ) {
        if (place[nr][nc] === 'P') {
          return 0;
        } else if (place[nr][nc] === 'O' && re) {
          visit[nr][nc] = 1;
          if (dfs(nr, nc, false) === 0) return 0;
        }
      }
    }
    return 1;
  }

  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      if (place[r][c] === 'P') {
        visit[r][c] = 2;
        if (dfs(r, c, true) === 0) return 0;
      }
    }
  }

  return 1;
}

function solution(places) {
  const answer = [];

  for (let place of places) {
    answer.push(getValid(place));
  }

  return answer;
}
