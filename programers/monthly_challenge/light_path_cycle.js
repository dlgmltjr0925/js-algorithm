function solution(grid) {
  const cycles = [];
  const visit = Array.from({ length: grid.length }, () => {
    return Array.from({ length: grid[0].length }, () => {
      return Array.from({ length: 4 }, () => false);
    });
  });

  const dr = [0, 1, 0, -1];
  const dc = [1, 0, -1, 0];

  function rotateR(r, c) {
    return r === 0 ? (c === 1 ? [1, 0] : [-1, 0]) : r === 1 ? [0, -1] : [0, 1];
  }

  function rotateL(r, c) {
    return r === 0 ? (c === 1 ? [-1, 0] : [1, 0]) : r === 1 ? [0, 1] : [0, -1];
  }

  function dir(r, c) {
    return r === 0 ? (c === 1 ? 1 : 3) : r === 1 ? 2 : 0;
  }

  function move(sr, sc, dr, dc) {
    if (visit[sr][sc][dir(dr, dc)]) return;
    const next = [sr, sc, dr, dc];
    let count = 0;
    while (!visit[next[0]][next[1]][dir(next[2], next[3])]) {
      visit[next[0]][next[1]][dir(next[2], next[3])] = true;
      count++;

      for (let i = 0; i < 2; i++) {
        next[i] += next[i + 2];
        const length = i === 0 ? grid.length : grid[0].length;
        if (next[i] === length) next[i] = 0;
        else if (next[i] === -1) next[i] = length - 1;
      }
      const [nr, nc] = next;
      switch (grid[nr][nc]) {
        case 'L':
          [next[2], next[3]] = rotateL(next[2], next[3]);
          break;
        case 'R':
          [next[2], next[3]] = rotateR(next[2], next[3]);
          break;
      }
    }
    cycles.push(count);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      for (let k = 0; k < 4; k++) {
        move(i, j, dr[k], dc[k]);
      }
    }
  }

  return cycles.sort((a, b) => a - b);
}
