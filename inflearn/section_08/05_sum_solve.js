function solution(n, arr) {
  let answer = "NO";
  const total = arr.reduce((a, b) => a + b) / 2;
  let length = arr.length;

  function DFS(L, sum) {
    if (answer === "YES") return;
    else if (L === length) {
      if (total === sum) answer = "YES";
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(solution(6, [1, 3, 5, 6, 7, 10]));
