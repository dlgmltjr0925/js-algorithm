function solution(N, stages) {
  const answer = [];
  const stageCount = {};
  for (const stage of stages) {
    if (!stageCount[stage]) stageCount[stage] = 0;
    stageCount[stage]++;
  }

  let total = stageCount[N + 1] || 0;

  for (let i = N; i > 0; i--) {
    const count = stageCount[i] || 0;
    total += count;
    answer.push({
      number: i,
      rate: total === 0 ? 0 : count / total,
    });
  }

  return answer
    .sort((a, b) => {
      return a.rate !== b.rate ? b.rate - a.rate : a.number - b.number;
    })
    .map(({ number }) => number);
}
