function solution(dartResult) {
  const result = dartResult.split(/\D+/).slice(0, 3).map(score => parseInt(score));
  const bonus = dartResult.split(/\d+/).slice(1);
  for (let i = 0; i < 3; i++) {
      if (bonus[i][0] === 'D') result[i] = result[i] ** 2;
      else if (bonus[i][0] === 'T') result[i] = result[i] ** 3;
      if (bonus[i][1] === '*') {
          result[i] *= 2;
          if (i > 0) result[i - 1] *= 2;
      } else if (bonus[i][1] === '#') {
          result[i] *= -1;
      }
  }
  return result.reduce((a, b) => a + b);
}