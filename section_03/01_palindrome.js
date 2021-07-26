function solution(str) {
  const lowerStr = str.toLowerCase();
  const { length } = lowerStr;
  const n = Math.floor(length / 2);
  for (let i = 0; i < n; i++) {
    if (lowerStr[i] !== lowerStr[length - i - 1]) return "NO";
  }
  return "YES";
}

console.log(solution("gooG"));
