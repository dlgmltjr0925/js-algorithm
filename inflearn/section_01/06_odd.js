function solution(...inputs) {
  const odds = inputs.filter((value) => value % 2 !== 0);
  console.log(odds.reduce((a, b) => a + b));
  console.log(Math.min(...odds));
}

solution(12, 77, 38, 41, 53, 92, 85);
