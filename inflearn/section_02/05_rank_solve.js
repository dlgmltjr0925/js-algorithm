function solution(n, arr) {
  const rankArr = Array.from(arr, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i] < arr[j]) rankArr[i]++;
    }
  }

  return rankArr;
}

console.log(solution(5, [87, 89, 92, 100, 76]));
