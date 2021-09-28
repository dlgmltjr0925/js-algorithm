function solution(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      if (count === 0) return false;
      count++;
    } else {
      count--;
    }
  }

  return count === 0;
}
