function solution(n, m, arr) {
  arr.sort((a, b) => a - b);
  let answer;
  let lt = 0;
  rt = n - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === m) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > m) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

console.log(solution(8, 99, [23, 87, 65, 12, 57, 32, 99, 81]));
