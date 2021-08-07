function solution(n, m, input) {
  const answer = Array.from({ length: m }, () => 0);
  const check = Array.from({ length: m }, () => 0);

  function DFS(L) {
    if (L === m) {
      console.log(answer.join(" "));
    } else {
      for (let i = 0; i < n; i++) {
        if (check[i] === 1) continue;
        answer[L] = input[i];
        check[i] = 1;
        DFS(L + 1);
        check[i] = 0;
      }
    }
  }

  DFS(0);

  return answer;
}

console.log(solution(3, 2, [3, 6, 9]));
