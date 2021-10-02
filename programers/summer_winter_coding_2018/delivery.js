function solution(N, road, K) {
  let answer = 0;

  const visit = Array.from({ length: N + 1 }, () => Number.MAX_SAFE_INTEGER);
  visit[1] = 0;

  const nodes = Array.from({ length: N + 1 }, () => []);

  for (const [a, b, c] of road) {
    nodes[a].push({ e: b, t: c });
    nodes[b].push({ e: a, t: c });
  }

  const queue = [];
  queue.push([1, 0]);

  while (queue.length) {
    const [s, t] = queue.shift();

    for (const node of nodes[s]) {
      if (visit[node.e] > t + node.t) {
        visit[node.e] = t + node.t;
        queue.push([node.e, t + node.t]);
      }
    }
  }

  return visit.filter((t) => t <= K).length;
}
