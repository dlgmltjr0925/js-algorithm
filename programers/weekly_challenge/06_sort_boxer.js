function solution(weights, head2head) {
  const players = weights.map((weight, i) => ({
    id: i + 1,
    weight,
    rate: 0,
    count: 0,
  }));

  for (let i = 0; i < head2head.length; i++) {
    const weight = weights[i];
    let winCount = 0;
    let fightCount = 0;
    for (let j = 0; j < head2head.length; j++) {
      if (head2head[i][j] !== 'N') fightCount++;
      if (head2head[i][j] === 'W') {
        winCount++;
        if (weights[j] > weight) players[i].count++;
      }
    }
    if (fightCount !== 0) players[i].rate = winCount / fightCount;
  }

  return players
    .sort((a, b) => {
      return a.rate !== b.rate
        ? a.rate - b.rate < 0
          ? 1
          : -1
        : a.count !== b.count
        ? a.count - b.count < 0
          ? 1
          : -1
        : a.weight !== b.weight
        ? a.weight - b.weight < 0
          ? 1
          : -1
        : a.id - b.id < 0;
    })
    .map(({ id }) => id);
}
