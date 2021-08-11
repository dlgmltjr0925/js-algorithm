function solution(n, arr) {
  let max = 0;
  const arr1 = Array.from({ length: n }, () => 1);
  const arr2 = Array.from({ length: n }, () => 1);

  for (let i = 1; i < n; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[i] > arr[j]) {
        const value = arr1[j] + 1;
        arr1[i] = Math.max(arr1[i], value);
        if (arr1[j] === arr2[j]) break;
      }
    }
    arr2[i] = Math.max(arr1[i], arr1[i - 1]);
    // console.log(i);
    // console.log(arr1);
    // console.log(arr2);
  }

  return arr2[n - 1];
}

console.log(solution(8, [5, 3, 7, 8, 6, 2, 9, 4]));
