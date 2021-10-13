function solution(n, k) {
  const answer = [];
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  const factorial = [1];
  for (let i = 1; i < n; i++) {
    factorial[i] = factorial[i - 1] * i;
  }
  factorial.reverse();

  function dfs(i, arr) {
    if (arr.length === 0) return;
    const f = factorial.shift();
    const share = parseInt(i / f);
    const remain = parseInt(i % f);
    answer.push(arr[share]);
    dfs(
      remain,
      arr.filter((_, index) => share !== index)
    );
  }

  dfs(k - 1, arr);

  return answer;
}
