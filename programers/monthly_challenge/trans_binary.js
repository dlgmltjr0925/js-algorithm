function solution(s) {
  const answer = [0, 0];
  let num = s;

  while (num !== '1') {
    let zeroCount = 0;
    for (const c of num) {
      if (c === '0') zeroCount++;
    }
    answer[0]++;
    answer[1] += zeroCount;
    num = (num.length - zeroCount).toString(2);
  }

  return answer;
}
