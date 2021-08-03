function solution(n, arr) {
  for (let i = 1; i < n; i++) {
    const target = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > target) {
        arr[j + 1] = arr[j];
        if (j === 0) {
          arr[j] = target;
        }
      } else {
        arr[j + 1] = target;
        break;
      }
    }
    console.log(arr);
  }
  return arr.join(" ");
}

console.log(solution(6, [11, 7, 5, 6, 10, 9]));
