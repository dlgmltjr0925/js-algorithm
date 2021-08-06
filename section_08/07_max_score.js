// 점수와 시간

function solution(n, m, arr) {
  let answer = 0;

  function DFS(L, score, time) {
    if (time > m || L === n) return;
    answer = Math.max(answer, score);
    DFS(L + 1, score + arr[L][0], time + arr[L][1]);
    DFS(L + 1, score, time);
  }

  DFS(0, 0, 0);

  return answer;
}

console.log(
  solution(5, 20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
