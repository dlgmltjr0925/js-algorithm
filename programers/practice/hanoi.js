function solution(n) {
  let answer = [];

  function move(n, s, e, t) {
    if (n === 1) {
      answer.push([s, e]);
    } else {
      move(n - 1, s, t, e);
      answer.push([s, e]);
      move(n - 1, t, e, s);
    }
  }

  move(n, 1, 3, 2);

  return answer;
}
