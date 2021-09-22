function solution(price, money, count) {
  let answer = 0;
  let total = 0;

  for (let i = 0; i < count; i++) {
    total += price * (i + 1);
  }

  const diff = total - money;

  return diff > 0 ? diff : 0;
}
