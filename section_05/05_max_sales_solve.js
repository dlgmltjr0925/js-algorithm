function solution(n, k, arr) {
  let max = 0;
  let sum = 0;
  let lt = (rt = 0);

  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    if (rt - lt + 1 === k) {
      max = Math.max(max, sum);
      sum -= arr[lt++];
    }
  }

  return max;
}

console.log(solution(10, 3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
