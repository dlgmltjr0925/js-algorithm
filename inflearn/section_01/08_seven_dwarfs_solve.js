function solution(inputs) {
  const sum = inputs.reduce((a, b) => a + b);
  for (let i = 0; i < inputs.length - 1; i++) {
    for (let j = i + 1; j < inputs.length; j++) {
      if (sum - inputs[i] - inputs[j] === 100) {
        return inputs.filter((_, idx) => idx !== i && idx !== j);
      }
    }
  }
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
