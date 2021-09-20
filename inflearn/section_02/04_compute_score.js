function solution(count, arr) {
  let totalScore = 0;
  let score = 0;
  for (let i = 0; i < count; i++) {
    if (arr[i] === 1) {
      totalScore += ++score;
    } else {
      score = 0;
    }
  }
  return totalScore;
}

console.log(solution(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
