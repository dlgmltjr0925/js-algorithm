function solution(scores) {
  let answer = '';
  for (let i = 0; i < scores.length; i++) {
    let length = scores.length;
    let total = 0;
    let max = -1;
    let maxCount = 0;
    let min = 101;
    let minCount = 0;
    for (let j = 0; j < scores.length; j++) {
      const score = scores[j][i];
      if (score >= max) {
        maxCount = score === max ? maxCount + 1 : 1;
        max = score;
      }
      if (score <= min) {
        minCount = score === min ? minCount + 1 : 1;
        min = score;
      }
      total += score;
    }
    if (
      (max === scores[i][i] && maxCount === 1) ||
      (min === scores[i][i] && minCount === 1)
    ) {
      total -= scores[i][i];
      length--;
    }
    const avg = total / length;
    if (avg >= 90) {
      answer += 'A';
    } else if (avg >= 80) {
      answer += 'B';
    } else if (avg >= 70) {
      answer += 'C';
    } else if (avg >= 50) {
      answer += 'D';
    } else {
      answer += 'F';
    }
  }
  return answer;
}
