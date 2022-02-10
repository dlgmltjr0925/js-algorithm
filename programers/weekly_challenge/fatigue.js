function solution(k, dungeons) {
  let answer = -1;

  const visit = Array.from({ length: dungeons.length }, () => false);

  function dfs(count) {
    for (let i = 0; i < dungeons.length; i++) {
      if (visit[i]) continue;
      const [mrk, ck] = dungeons[i];

      if (k >= mrk) {
        answer = Math.max(answer, count + 1);

        visit[i] = true;
        k -= ck;

        dfs(count + 1);

        visit[i] = false;
        k += ck;
      }
    }
  }

  dfs(0);

  return answer;
}
