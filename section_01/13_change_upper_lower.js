function solution(str) {
  let result = "";
  const regexp = /[a-z]/;
  for (let s of str) {
    result += regexp.test(s) ? s.toUpperCase() : s.toLowerCase();
  }
  return result;
}

console.log(solution("StuDY"));
