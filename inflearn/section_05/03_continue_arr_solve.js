function solution(n, m, arr) {
  let answer = 0;
  let sum = 0;
  let lt = (rt = 0);
  while (rt < n) {
    if (sum < m) {
      sum += arr[++rt];
    } else if (sum > m) {
      sum -= arr[lt++];
    } else {
      answer++;
      sum += arr[++rt];
      sum -= arr[lt++];
    }
  }

  return answer;
}

console.log(solution(8, 6, [1, 2, 1, 3, 1, 1, 1, 2]));
