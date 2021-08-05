function binary(n) {
  if (n === 0) return;
  const value = n % 2;
  binary(parseInt(n / 2));
  console.log(value);
}

function solution(n) {
  binary(n);
}

console.log(solution(11));
