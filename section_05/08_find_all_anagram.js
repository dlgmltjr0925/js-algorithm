function sort(str) {
  return str.split("").sort().join("");
}

function solution(source, target) {
  let answer = 0;
  const t = sort(target);
  for (let i = 0; i < source.length - target.length + 1; i++) {
    const s = sort(source.slice(i, i + target.length));
    if (t === s) answer++;
  }

  return answer;
}

console.log(solution("bacaAacba", "abc"));
