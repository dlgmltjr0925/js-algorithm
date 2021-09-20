function solution(str, target) {
  const regexp = new RegExp(target, "g");
  return (str.match(regexp) || []).length;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));
