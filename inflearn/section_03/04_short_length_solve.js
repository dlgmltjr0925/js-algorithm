function solution(source, target) {
  const length = source.length;
  const answer = Array.from(source, () => length);
  let length1 = length;
  let length2 = length;
  for (let i = 0; i < length; i++) {
    const j = length - i - 1;

    if (source[i] === target) length1 = 0;
    answer[i] = Math.min(answer[i], length1++);

    if (source[j] === target) length2 = 0;
    answer[j] = Math.min(answer[j], length2++);
  }

  return answer.join(" ");
}

console.log(solution("teachermode", "e"));
