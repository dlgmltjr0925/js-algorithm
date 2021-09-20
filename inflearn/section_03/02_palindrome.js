function solution(str) {
  const transStr = str.toLowerCase().replace(/[^a-z]/g, "");
  const length = transStr.length;
  const n = Math.floor(length / 2);
  for (let i = 0; i < n; i++) {
    if (transStr[i] !== transStr[length - i - 1]) return "NO";
  }
  return "YES";
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
