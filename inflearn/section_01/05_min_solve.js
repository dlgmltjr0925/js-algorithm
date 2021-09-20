function solution(inputs) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < inputs.length; i++) {
    if (min > inputs[i]) min = inputs[i];
  }
  return min;
}

console.log(solution([5, 3, 7, 11, 2, 15, 17]));
