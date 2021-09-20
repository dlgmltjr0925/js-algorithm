function solution(n, arr) {
  return arr.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
}

console.log(
  solution(5, [
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
  ])
);
