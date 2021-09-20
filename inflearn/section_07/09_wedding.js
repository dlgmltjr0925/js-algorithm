function solution(n, arr) {
  let answer = 0;
  const timeLine = Array.from({ length: 72 }, () => 0);

  arr.forEach(([st, et]) => {
    timeLine[st]++, timeLine[et]--;
  });

  let current = 0;
  for (let i = 0; i < 72; i++) {
    current += timeLine[i];
    if (current > answer) answer = current;
  }

  return answer;
}

console.log(
  solution(5, [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
