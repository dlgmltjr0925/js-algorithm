function solution() {
  let answer;

  function BFS() {
    const queue = [1];
    while (queue.length) {
      const v = queue.shift();
      console.log(v);
      for (let i = 0; i < 2; i++) {
        const value = v * 2 + i;
        if (value < 8) {
          queue.push(value);
        }
      }
    }
  }

  BFS();

  return answer;
}

solution();
