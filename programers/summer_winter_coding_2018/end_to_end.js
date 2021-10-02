function solution(n, words) {
  const answer = [0, 0];
  const visit = {};
  visit[words[0]] = true;

  let h = 1;
  let seq = 1;

  for (let i = 1; i < words.length; i++) {
    h++;
    const prev = words[i - 1];
    const word = words[i];
    if (prev[prev.length - 1] !== word[0] || visit[word]) {
      return [h, seq];
    }
    visit[word] = true;

    if (h === n) {
      h = 0;
      seq++;
    }
  }

  return answer;
}
