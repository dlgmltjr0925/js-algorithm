const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

function compare(height, map, i, j) {
  for (let k = 0; k < 4; k++) {
    if (height <= map[i + dr[k]][j + dc[k]]) return false;
  }
  return true;
}

function solution(n, arr) {
  let count = 0;
  const map = [];
  for (let i = 0; i < n + 2; i++) {
    if (i === 0 || i === n + 1) {
      map.push(new Array(n + 2).fill(0));
    } else {
      map.push([0, ...arr[i - 1], 0]);
    }
  }
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      const height = map[i][j];
      const isPeak = compare(height, map, i, j);
      if (isPeak) count++;
    }
  }
  return count;
}

console.log(
  solution(5, [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
