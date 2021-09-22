function solution(str1, str2) {
  let answer = 0;

  function getSet(str) {
    const set = {};
    str = str.toLowerCase();
    for (let i = 0; i < str.length - 1; i++) {
      const word = str.slice(i, i + 2);
      if (/[a-z]{2}/.test(word)) {
        if (!set[word]) set[word] = 0;
        set[word]++;
      }
    }
    return set;
  }

  const set1 = getSet(str1);
  const set2 = getSet(str2);

  const intersection = {};
  const union = { ...set1 };

  Object.entries(set1).forEach(([word, count]) => {
    if (set2[word]) intersection[word] = Math.min(count, set2[word]);
  });

  Object.entries(set2).forEach(([word, count]) => {
    if (!union[word]) {
      union[word] = count;
    } else {
      union[word] = Math.max(count, union[word]);
    }
  });

  const intersectionCount = Object.values(intersection).reduce(
    (a, b) => a + b,
    0
  );
  const unionCount = Object.values(union).reduce((a, b) => a + b, 0);

  return unionCount === 0
    ? 65536
    : Math.floor((65536 * intersectionCount) / unionCount);
}
