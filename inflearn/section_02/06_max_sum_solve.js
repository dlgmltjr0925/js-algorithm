function solution(n, arr) {
  let max = 0;
  let varticalArr;
  let row = 0;
  let col = 0;
  let dia1 = 0;
  let dia2 = 0;
  for (let i = 0; i < n; i++) {
    row = 0;
    col = 0;
    for (let j = 0; j < n; j++) {
      row += arr[i][j];
      col += arr[j][i];
    }
    max = Math.max(max, row, col);

    dia1 += arr[i][i];
    dia2 += arr[4 - i][i];
  }
  max = Math.max(max, dia1, dia2);

  return max;
}

console.log(
  solution(5, [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
