function solution(s, e) {
  let answer = Number.MAX_SAFE_INTEGER;

  let diff = Math.abs(e - s);
  const dxs = [1, -1, 5];
  const queue = [[s, 0]];
  while (queue.length) {
    const [x, l] = queue.shift();
    if (x === e) {
      answer = Math.min(answer, l);
      break;
    }
    for (const dx of dxs) {
      const nx = x + dx;
      if (Math.abs(e - nx) < diff) {
        diff = Math.abs(e - nx);
        queue.push([nx, l + 1]);
      }
    }
  }

  return answer;
}

console.log(solution(5, 14));
console.log(solution(8, 3));
