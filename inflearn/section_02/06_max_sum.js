function maxSum(arr, max) {
  return Math.max(
    arr.reduce((a, b) => a + b),
    max
  );
}

function solution(n, arr) {
  let max = 0;
  let varticalArr;
  const diagonal1 = [];
  const diagonal2 = [];
  for (let i = 0; i < n; i++) {
    // 가로
    max = maxSum(arr[i], max);
    varticalArr = [];
    for (let j = 0; j < n; j++) {
      varticalArr.push(arr[j][i]);
      if (i === j) diagonal1.push(arr[i][j]);
      if (i + j === n - 1) diagonal2.push(arr[i][j]);
    }
    // 세로
    max = maxSum(varticalArr, max);
  }
  max = maxSum(diagonal1, max);
  max = maxSum(diagonal2, max);

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
