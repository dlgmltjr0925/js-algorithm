function solution(n, m, arr) {
  let answer = Math.floor(n / 2);
  let diff = answer;

  arr.sort((a, b) => a - b);
  console.log(arr);

  while (arr[answer] !== m) {
    diff = Math.ceil(diff / 2);
    if (m < arr[answer]) answer -= diff;
    else answer += diff;
  }

  return answer + 1;
}

console.log(solution(8, 99, [23, 87, 65, 12, 57, 32, 99, 81]));
