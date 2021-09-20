function solution(arr) {
  return arr.filter((value, i) => i === 0 || arr[i - 1] < value);
}

console.log(solution([7, 3, 9, 5, 6, 12]));
