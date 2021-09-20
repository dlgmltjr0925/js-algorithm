function solution(arr) {
  return arr.filter((value, i) => arr.indexOf(value) === i);
}

console.log(solution(["good", "time", "good", "time", "student"]));
