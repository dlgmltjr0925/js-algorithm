function solution(n, c, arr) {
  const stall = Array.from({ length: n + 1 }, () => 0);
  for (const x of arr) {
    stall[x] = 1;
  }

  let answer;

  return answer;
}

console.log(solution(5, 3, [1, 2, 8, 4, 9]));
