function solution(n, arr) {
  let answer = 0;
  arr.sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]));
  let et = 0;
  for (let x of arr) {
    if (x[0] >= et) {
      et = x[1];
    }
  }

  return answer;
}

console.log(
  solution(5, [
    [1, 4],
    [3, 5],
    [2, 3],
    [4, 6],
    [5, 7],
  ])
);

console.log(
  solution(3, [
    [3, 3],
    [1, 3],
    [2, 3],
  ])
);
