function solution(n, str) {
  let answer = "";
  let max = 0;
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    const target = str.charAt(i);
    if (!obj[target]) obj[target] = 0;
    obj[target]++;
  }
  Object.entries(obj).forEach(([target, count]) => {
    if (count > max) {
      max = count;
      answer = target;
    }
  });

  return answer;
}

console.log(solution(15, "BACBACCACCBDEDE"));
