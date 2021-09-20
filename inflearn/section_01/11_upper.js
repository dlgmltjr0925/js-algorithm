function solution(str) {
  return str.match(/[A-Z]/g)?.length | 0;
}

console.log(solution("KoreaTimeGood"));
