function solution(n, f) {
  const factorial = [1];
  for (let i = 1; i <= n; i++) {
    factorial.push(factorial[i - 1] * i);
  }
  function combination(n, r) {
    return factorial[n] / (factorial[n - r] * factorial[r]);
  }
  const comb = Array.from({ length: n }, (_, i) => combination(n - 1, i));
  const check = Array.from({ length: n }, () => 0);
  const answer = Array.from({ length: n }, () => 0);
  let flag = false;

  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === f) {
      console.log(answer.join(" "));
      flag = true;
    } else {
      for (let i = 0; i < n; i++) {
        if (check[i] === 1) continue;
        answer[L] = i + 1;
        check[i] = 1;
        DFS(L + 1, sum + answer[L] * comb[L]);
        check[i] = 0;
      }
    }
  }

  DFS(0, 0);
}

solution(4, 16);
