function solution(enter, leave) {
  const entered = new Set();
  const answer = Array.from({ length: enter.length }, () => 0);
  let ei = 0;

  for (let i = 0; i < leave.length; i++) {
    const number = leave[i];

    while (!entered.has(number)) {
      entered.add(enter[ei++]);
    }

    entered.delete(number);
    s;
    answer[number - 1] += entered.size;
    entered.forEach((number) => {
      answer[number - 1]++;
    });
  }

  return answer;
}
