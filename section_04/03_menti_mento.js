function solution(n, m, arr) {
  let answer = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let match = true;
      const base = arr[0].indexOf(i + 1) < arr[0].indexOf(j + 1) ? 1 : -1;
      for (let k = 1; k < m && match; k++) {
        const compare = arr[k].indexOf(i + 1) < arr[k].indexOf(j + 1) ? 1 : -1;
        if (base !== compare) match = false;
      }
      console.log(i, j, match);
      if (match) answer++;
    }
  }

  return answer;
}

console.log(
  solution(4, 3, [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
