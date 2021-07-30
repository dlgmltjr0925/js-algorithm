function solution(n1, arr1, n2, arr2) {
  const max = Math.max(n1, n2);
  const arr1Set = new Set(arr1);
  const arr2Set = new Set(arr2);
  const answerSet = new Set();
  for (let i = 0; i < max; i++) {
    if (arr1Set.has(arr2[i])) {
      answerSet.add(arr2[i]);
    }
    if (arr2Set.has(arr1[i])) {
      answerSet.add(arr1[i]);
    }
  }
  return [...answerSet].sort((a, b) => a - b).join(" ");
}

console.log(solution(5, [1, 3, 9, 5, 2], 5, [3, 2, 5, 7, 8]));
