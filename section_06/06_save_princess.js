function solution(n, k) {
  let i = 0;
  let count = 0;
  let princeCount = n;
  const linkedList = {};
  for (let i = 0; i < n; i++) {
    linkedList[i] = { prev: i - 1, next: i + 1 };
  }
  linkedList[0].prev = n - 1;
  linkedList[n - 1].next = 0;

  while (princeCount !== 1) {
    count++;
    if (count === k) {
      const { prev, next } = linkedList[i];
      linkedList[prev].next = next;
      linkedList[next].prev = prev;
      princeCount--;
      count = 0;
    }
    i = linkedList[i].next;
  }

  return ++i;
}

console.log(solution(8, 3));
