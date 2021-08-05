function subset(s, n, arr) {
  if (s > n) return;
  for (let i = s; i <= n; i++) {
    subset(i + 1, n, [...arr, i]);
    console.log([...arr, i].join(" "));
  }
}

function solution(n) {
  subset(1, n, []);
}

solution(4);
