function solution(n, m) {
  let answer = 0;

  const arr = Array.from({ length: m }, () => 0);
  const check = Array.from({ length: m }, () => 0);

  function DFS(L, S) {
    if (L === m) {
      console.log(arr.join(" "));
      answer++;
    } else {
      for (let i = S; i < n; i++) {
        arr[L] = i + 1;
        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(solution(4, 2));
