function solution(n, arr) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 1; j < n - i; j++) {
      if (arr[j - 1] > arr[j]) {
        temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr.join(" ");
}

console.log(solution(6, [13, 5, 11, 7, 23, 15]));
