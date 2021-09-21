function solution(rows, columns, queries) {
  const answer = [];
  const map = Array.from({ length: rows }, (_, r) => {
    return Array.from({ length: columns }, (_, c) => r * columns + (c + 1));
  });

  for (const query of queries) {
    const [r1, c1, r2, c2] = query.map((value) => value - 1);
    let min = map[r1][c2];
    const temp = map[r1][c2];

    for (let i = c2; i > c1; i--) {
      map[r1][i] = map[r1][i - 1];
      min = Math.min(min, map[r1][i]);
    }
    for (let i = r1; i < r2; i++) {
      map[i][c1] = map[i + 1][c1];
      min = Math.min(min, map[i][c1]);
    }
    for (let i = c1; i < c2; i++) {
      map[r2][i] = map[r2][i + 1];
      min = Math.min(min, map[r2][i]);
    }
    for (let i = r2; i > r1; i--) {
      map[i][c2] = map[i - 1][c2];
      min = Math.min(min, map[i][c2]);
    }
    map[r1 + 1][c2] = temp;

    answer.push(min);
  }

  return answer;
}
