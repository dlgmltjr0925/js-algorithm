function solution(left, right) {
  let answer = 0;
  const measures = Array.from({ length: right + 1 }, () => 1);
  for (let i = 2; i <= right; i++) {
      for (let j = i; j <= right; j += i) {
          measures[j]++;
      }
  }
  
  for (let i = left; i <= right; i++) {
      answer += (measures[i] % 2 === 0 ? 1 : -1) * i;
  }
  
  return answer;
}