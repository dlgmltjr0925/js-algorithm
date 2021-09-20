function solution(count, arr) {
  let answer = arr[0];
  let maxSum = 0;
  let sum, share;
  for (let i = 0; i < count; i++) {
    sum = 0;
    share = arr[i];
    do {
      sum += share % 10;
      share = Math.floor(share / 10);
    } while (share !== 0);

    if (sum >= maxSum) {
      maxSum = sum;
      answer = Math.max(answer, arr[i]);
    }
  }
  return answer;
}

console.log(solution(7, [128, 460, 603, 40, 521, 137, 123]));
