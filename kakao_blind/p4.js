function solution(n, apeachInfo) {
  let answer = [-1];
  const ryanInfo = Array.from({ length: 11 }, () => 0);
  let max = 0;
  let apeachScore = 0;
  let ryanScore = 0;

  apeachInfo.forEach((value, i) => {
    apeachScore += value > 0 ? 10 - i : 0;
  });

  console.log(apeachScore);

  function dfs(remain, start) {
    if (remain === 0 || start === 11) {
      if (ryanScore > apeachScore && ryanScore - apeachScore >= max) {
        console.log(ryanScore, apeachScore, remain);
        max = ryanScore - apeachScore;
        answer = [...ryanInfo];
        if (!remain === 0) {
          answer[10] += remain;
        }
        console.log(answer.join(" "));
      }
    } else {
      for (let i = start; i < 11; i++) {
        const score = 10 - i;
        let winCount = apeachInfo[i] + 1;
        // 이기는 경우
        if (remain >= winCount) {
          ryanInfo[i] = winCount;
          ryanScore += score;
          if (apeachInfo[i] !== 0) apeachScore -= score;
          dfs(remain - winCount, i + 1);

          ryanInfo[i] = 0;
          ryanScore -= score;
          if (apeachInfo[i] !== 0) apeachScore += score;
        }
        // 지는 경우
        dfs(remain, i + 1);
      }
    }
  }

  dfs(n, 0);

  return answer;
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
