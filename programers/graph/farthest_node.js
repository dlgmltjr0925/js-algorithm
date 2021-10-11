function solution(n, edges) {
  let answer = 0;
  let max = 0;
  const map = Array.from({ length: n + 1 }, () => []);
  const visit = Array.from({ length: n + 1 }, () => false);

  for (const [v1, v2] of edges) {
    map[v1].push(v2);
    map[v2].push(v1);
  }

  const queue = [];
  visit[1] = true;
  queue.push([1, 0]);

  while (queue.length) {
    const [v, l] = queue.shift();
    for (const nv of map[v]) {
      const nl = l + 1;
      if (!visit[nv]) {
        if (nl > max) {
          max = nl;
          answer = 0;
        }
        answer++;
        visit[nv] = true;
        queue.push([nv, nl]);
      }
    }
  }

  return answer;
}
