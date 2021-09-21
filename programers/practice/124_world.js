function solution(n) {
  let answer = "";

  function div(n) {
    let remain = n;
    if (n > 2) {
      let share = Math.floor(n / 3);
      remain = n % 3;
      if (remain === 0) {
        share--;
        remain = 4;
      }
      div(share);
    }
    answer += `${remain}`;
  }

  div(n);

  return answer.replace(/^0/g, "");
}
