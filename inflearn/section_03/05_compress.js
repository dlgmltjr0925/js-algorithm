function solution(str) {
  const source = str + " ";
  let char = source[0];
  let count = 1;
  let answer = "";
  for (let i = 0; i < source.length; i++) {
    if (source[i] === char) {
      count++;
    } else {
      answer += char;
      if (count > 1) answer += count;
      char = source[i];
      count = 1;
    }
  }

  return answer;
}

console.log(solution("KKHSSSSSSSEE"));
