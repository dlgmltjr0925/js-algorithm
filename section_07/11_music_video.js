function solution(n, m, arr) {
  arr.sort((a, b) => a - b);
  const bi = Array.from({ length: m }, (_, i) => i);
  const sum = bi.map((s, i) => arr.slice(s, bi[i + 1]).reduce((a, b) => a + b));
  let max = Math.max(...sum);
  let answer = max;
  console.log(sum);

  let maxIndex = 0;
  let diffMax = 0;

  while (answer === max) {
    maxIndex = 0;
    diffMax = 0;
    for (let i = 1; i < m; i++) {
      const diff = sum[i] - sum[i - 1];
      if (diff > diffMax) {
        diffMax = diff;
        maxIndex = i;
      }
    }
    const value = arr[bi[maxIndex]++];
    sum[maxIndex - 1] += value;
    sum[maxIndex] -= value;
    max = Math.max(...sum);

    if (answer > max) answer = max;
  }

  return answer;
}

console.log(solution(9, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
