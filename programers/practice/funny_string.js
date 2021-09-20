function solution(s) {
  let answer = '';
  let i = 0;
  for (const c of s) {
      if (c === ' ') {
          answer += ' ';
          i = 0;
      } else if (i++ % 2 === 0) {
          answer += c.toUpperCase();
      } else {
          answer += c.toLowerCase();
      }
      
  }
  return answer;
}