function solution(p) {
  if (p === '') return '';

  // u, v 분리
  let count = 0;
  let i = 0;

  do {
    count += p[i++] === '(' ? 1 : -1;
  } while (count !== 0);

  const u = p.slice(0, i);
  const v = p.slice(i);

  if (u[0] === '(') {
    // 올바른 문자열
    return u + solution(v);
  } else {
    // 올바르지 않은 문자열
    let n = `(${solution(v)})`;
    for (let i = 1; i < u.length - 1; i++) {
      n += u[i] === '(' ? ')' : '(';
    }
    return n;
  }
}
