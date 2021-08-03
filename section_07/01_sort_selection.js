function solution(n, arr) {
  let i = 0;
  let min;
  let minIndex;

  for (let i = 0; i < n; i++) {
    min = arr[i];
    minIndex = i;

    for (let j = i; j < n; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }

    if (arr[i] !== min) {
      arr[minIndex] = arr[i];
      arr[i] = min;
    }
  }

  return arr.join(" ");
}

console.log(solution(6, [13, 5, 11, 7, 23, 15]));
