function solution(land) {
  let answer = 0;

  const score = Array.from({ length: land.length + 1 }, () => [0, 0, 0, 0]);

  for (let i = 1; i <= land.length; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (j !== k) {
          score[i][j] = Math.max(score[i][j], land[i - 1][j] + score[i - 1][k]);
        }
      }
    }
  }

  return Math.max(...score.pop());
}
