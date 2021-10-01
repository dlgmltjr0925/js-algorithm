function solution(n, t, m, p) {
  let answer = '';
  let count = -1;
  let str = [];
  let seq = 1;

  while (t) {
    if (str.length === 0) {
      count++;
      str = count.toString(n).toUpperCase().split('');
    }
    if (seq === p) {
      t--;
      answer += str.shift();
    } else {
      str.shift();
    }

    seq++;
    if (seq > m) seq = 1;
  }

  return answer;
}
