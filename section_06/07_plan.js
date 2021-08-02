function solution(condition, plan) {
  let i = 0;

  for (let x of plan) {
    if (x === condition[i]) {
      i++;
    }
  }

  return i === condition.length ? "YES" : "NO";
}

console.log(solution("CBA", "CBDAGE"));
