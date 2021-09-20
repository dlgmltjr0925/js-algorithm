function solution(count, arr) {
  let answer = "";
  for (let str of arr) {
    if (str.length > answer.length) answer = str;
  }
  return answer;
}

console.log(solution(5, ["teacher", "time", "student", "beautiful", "good"]));
