function solution(str) {
  const [source, target] = str.split(" ");
  const result = Array.from(source, () => 0);

  const indexes = [];
  for (let i = 0; i < source.length; i++) {
    if (source.charAt(i) === target) indexes.push(i);
  }

  for (let i = 0; i < source.length; i++) {
    result[i] = Math.min(...indexes.map((index) => Math.abs(index - i)));
  }

  return result.join(" ");
}

console.log(solution("teachermode e"));
