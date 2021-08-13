function solution(priorities, location) {
  let answer = 1;
  let loc = location;

  while (priorities.length) {
    const max = Math.max(...priorities);
    const p = priorities.shift();
    console.log(max, p);

    if (p === max) {
      if (loc === 0) return answer;
      answer++;
      loc--;
    } else {
      priorities.push(p);
      if (loc === 0) loc = priorities.length - 1;
      else loc--;
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
