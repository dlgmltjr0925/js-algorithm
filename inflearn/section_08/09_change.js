function solution(n, arr, target) {
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(sum, cnt) {
    if (sum > target || cnt > answer) {
      return;
    } else if (sum === target) {
      answer = Math.min(cnt, answer);
    } else {
      for (let i = 0; i < arr.length; i++) {
        DFS(sum + arr[i], cnt + 1);
      }
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(solution(3, [1, 2, 5], 15));
