function solution(n, k) {
  let answer = 0;
  const queue = Array.from({ length: n }, (_, i) => i + 1);
  let count = 0;

  while (queue.length !== 1) {
    const princess = queue.shift();
    if (++count % k !== 0) queue.push(princess);
  }

  return queue[0];
}

console.log(solution(8, 3));
