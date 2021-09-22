const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = lower.toUpperCase();

function solution(s, n) {
  let answer = '';

  for (const c of s) {
    if (/[a-z]/.test(c)) {
      answer += lower[((c.charCodeAt() + n) % 97) % 26];
    } else if (/[A-Z]/.test(c)) {
      answer += upper[((c.charCodeAt() + n) % 65) % 26];
    } else {
      answer += ' ';
    }
  }

  return answer;
}
