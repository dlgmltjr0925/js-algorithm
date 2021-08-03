function solution(n, arr) {
  return [...arr.filter((v) => v < 0), ...arr.filter((v) => v > 0)].join(" ");
}

console.log(solution(8, [1, 2, 3, -3, -2, 5, 6, -6]));
