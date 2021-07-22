function solution(str) {
  let answer = 0;
  for (let x of str) {
    // const num = x.charCodeAt()
    // if (num >= 64 && num <= 90) answer++
    if (x === x.toUpperCase()) answer++;
  }
  return answer;
}
console.log(solution("KoreaTimeGood"));
