function solution(n, arr, m) {
  let temp = m;
  const changes = Array.from({ length: n }, () => 0);
  arr.sort((a, b) => b - a);
  for (let i = 0; i < n; i++) {
    changes[i] = Math.floor(temp / arr[i]);
    temp %= arr[i];
    if (temp === 0) break;
  }

  return changes.reduce((a, b) => a + b);
}

console.log(solution(4, [1, 4, 5], 23));
