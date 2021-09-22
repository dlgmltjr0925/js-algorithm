function getRank(matchCount) {
  if (matchCount > 1) {
    return 7 - matchCount;
  } else {
    return 6;
  }
}

function solution(lottos, winNums) {
  let zeroCount = 0;
  let matchCount = 0;
  for (let i = 0; i < lottos.length; i++) {
    const num = lottos[i];
    if (num === 0) {
      zeroCount++;
    } else if (winNums.includes(num)) {
      matchCount++;
    }
  }

  return [getRank(matchCount + zeroCount), getRank(matchCount)];
}
