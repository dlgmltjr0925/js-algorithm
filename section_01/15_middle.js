function solution(str) {
  const { length } = str;
  const start = parseInt(length / 2);
  if (length % 2 === 0) {
    return str.slice(start - 1, start + 1);
  } else {
    return str.charAt(start);
  }
}

console.log(solution("study"));
console.log(solution("good"));
