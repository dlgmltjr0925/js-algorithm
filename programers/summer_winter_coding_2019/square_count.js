function getGcd(a, b) {
  if (b === 0) return a;
  else return getGcd(b, a % b);
}

function solution(w, h) {
  if (w === h) return w * (w - 1);

  if (w > h) [w, h] = [h, w];

  const gcd = getGcd(w, h);

  const ratio = w / h;
  const size = [w / gcd, h / gcd];

  let r = 0;
  let c = 0;
  let count = 0;

  while (r < size[1] - 1) {
    const sum = (w / h) * (r + 1);
    while (c < sum) {
      count++;
      c++;
    }
    count++;
    r++;
  }

  return w * h - count * gcd;
}
