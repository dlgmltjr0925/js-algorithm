const dr = [1, 0, -1];
const dc = [0, 1, -1];

function solution(n) {
  const answer = [];
  const map = Array.from({ length: n }, (_, i) => {
    return Array.from({ length: i + 1 }, () => 0);
  });

  let di = 0;
  const max = (n * (n + 1)) / 2;
  let r = 0;
  let c = 0;
  let number = 0;

  while (number !== max) {
    map[r][c] = ++number;
    let nr = r + dr[di];
    let nc = c + dc[di];
    if (nr === n || nc === n || map[nr][nc] !== 0) {
      di = di === 2 ? 0 : di + 1;
      r = r + dr[di];
      c = c + dc[di];
    } else {
      [r, c] = [nr, nc];
    }
  }

  map.forEach((row) => {
    row.forEach((value) => answer.push(value));
  });

  return answer;
}
