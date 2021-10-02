function solution(people, limit) {
  const weights = people.sort((a, b) => b - a);

  let i = 0;

  while (i < weights.length) {
    const weight = weights.pop();
    if (weight + weights[i] <= limit) {
      weights[i] += weight;
    } else {
      weights.push(weight);
    }
    i++;
  }

  return weights.length;
}
