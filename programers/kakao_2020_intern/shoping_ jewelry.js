function solution(gems) {
  let answer = [1, 1];
  const gemMap = {};
  let gemCount = 0;

  for (const gem of gems) {
    if (!gemMap[gem]) {
      gemMap[gem] = true;
      gemCount++;
    }
  }

  let lt = 0;
  let rt = -1;

  let diff = gems.length;
  const map = {};
  let count = 0;

  while (rt !== gems.length) {
    if (count < gemCount) {
      const gem = gems[++rt];
      if (!map[gem]) {
        map[gem] = 0;
        count++;
      }
      map[gem]++;
    } else {
      const gem = gems[lt++];
      map[gem]--;
      if (map[gem] === 0) {
        count--;
      }
    }
    if (count === gemCount && rt - lt < diff) {
      diff = rt - lt;
      answer = [lt + 1, rt + 1];
    }
  }

  return answer;
}
