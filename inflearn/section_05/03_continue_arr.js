function solution(n, m, arr) {
  let answer = 0;
  let sum;

  for (let i = 0; i < n; i++) {
    sum = 0;
    for (let j = i; sum < m && j < n; j++) {
      sum += arr[j];
      if (sum === m) answer++;
    }
  }

  return answer;
}

console.log(solution(8, 6, [1, 2, 1, 3, 1, 1, 1, 2]));
