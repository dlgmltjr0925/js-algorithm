function solution(n, k, arr) {
  let max = 0;
  let sum = 0;

  for (let i = 0; i < n - k - 1; i++) {
    sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    max = Math.max(max, sum);
  }

  return max;
}

console.log(solution(10, 3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
