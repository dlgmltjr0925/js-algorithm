function solution(s, n, arr) {
  const answer = Array.from({ length: s }, () => 0);

  for (const x of arr) {
    const index = answer.findIndex((value) => value === x);
    const end = index === -1 ? s - 1 : index;
    for (let i = end; i > 0; i--) {
      answer[i] = answer[i - 1];
    }
    answer[0] = x;
  }

  return answer.join(" ");
}

console.log(solution(5, 9, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
