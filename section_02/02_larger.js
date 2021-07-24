function solution(arr) {
  let max = 0;
  let count = 0;
  arr.forEach((value) => {
    if (value > max) {
      max = value;
      count++;
    }
  });
  return count;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
