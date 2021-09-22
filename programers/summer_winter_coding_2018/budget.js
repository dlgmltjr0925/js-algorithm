function solution(d, budget) {
  d.sort((a, b) => a - b);
  let answer = 0;
  let sum = 0;
  for (const price of d) {
    if (sum + price > budget) break;
    sum += price;
    answer++;
  }
  return answer;
}
