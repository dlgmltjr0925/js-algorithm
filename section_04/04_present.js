function solution(n, m, arr) {
  let max = 0;
  let count, sum;
  for (let i = 0; i < n; i++) {
    count = 0;
    sum = 0;
    arr[i][0] = arr[i][0] / 2;

    const priceArr = arr.map(([pp, sp]) => pp + sp).sort((a, b) => a - b);
    for (const price of priceArr) {
      sum += price;
      if (sum > m) {
        max = Math.max(max, count);
      } else {
        count++;
      }
    }

    arr[i][0] = arr[i][0] * 2;
  }

  return max;
}

console.log(
  solution(5, 28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
