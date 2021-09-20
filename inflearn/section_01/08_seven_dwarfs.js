function sum(...inputs) {
  return inputs.reduce((a, b) => a + b);
}

function solution(...inputs) {
  for (let i = 0; i < inputs.length - 1; i++) {
    for (let j = i + 1; j < inputs.length; j++) {
      const arr = inputs.filter((_, idx) => idx !== i && idx !== j);
      if (sum(...arr) === 100) return arr;
    }
  }
}

console.log(solution(20, 7, 23, 19, 10, 15, 25, 8, 13));
