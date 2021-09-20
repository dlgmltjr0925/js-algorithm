function solution(n, arr) {
  let a1 = [];
  let a2 = [];
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] >= arr[i + 1]) a1.push(i);
    else if (arr[i] <= arr[i - 1]) a2.push(i);
  }
  for (const i of a1) {
    for (const j of a2) {
      if (
        arr[i - 1] <= arr[j] &&
        arr[j] <= arr[i + 1] &&
        arr[j - 1] <= arr[i] &&
        arr[i] <= arr[j + 1]
      )
        return `${i + 1} ${j + 1}`;
    }
  }
}

console.log(solution(9, [120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution(6, [120, 130, 150, 150, 130, 150]));
