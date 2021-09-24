function solution(bridgeLength, weight, truckWeights) {
  let totalWeight = 0;
  let answer = 0;

  const bridges = [];
  const completes = [];
  const truckCount = truckWeights.length;

  while (completes.length !== truckCount) {
    answer++;

    for (let i = 0; i < bridges.length; i++) {
      bridges[i].count++;
    }

    if (bridges.length > 0 && bridges[0].count > bridgeLength) {
      const truck = bridges.shift();
      completes.push(truck);
      totalWeight -= truck.weight;
    }

    if (truckWeights.length > 0 && totalWeight + truckWeights[0] <= weight) {
      const truckWeight = truckWeights.shift();
      bridges.push({ weight: truckWeight, count: 1 });
      totalWeight += truckWeight;
    }
  }

  return answer;
}
