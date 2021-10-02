function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const visit = Array.from({ length: n }, (_, r) => {
    return Array.from({ length: m }, (_, c) => {
      return maps[r][c] === 1 ? Number.MAX_SAFE_INTEGER : 0;
    });
  });

  const dr = [0, 1, 0, -1];
  const dc = [1, 0, -1, 0];

  const gr = n - 1;
  const gc = m - 1;

  const queue = [];
  queue.push([0, 0, 1]); // 초기 위치

  while (queue.length > 0) {
    const [r, c, count] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (nr >= 0 && nr < n && nc >= 0 && nc < m && visit[nr][nc] > count + 1) {
        if (nr === gr && nc === gc) return count + 1;

        visit[nr][nc] = count + 1;
        queue.push([nr, nc, count + 1]);
      }
    }
  }

  return -1;
}
