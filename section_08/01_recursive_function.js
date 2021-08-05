function recursive(n, c) {
  if (c > n) return;
  else {
    console.log(c);
    recursive(n, c + 1);
  }
}

function solution(n) {
  recursive(n, 1);
}

console.log(solution(3));
