const diff = {
  A: 0,
  E: 1,
  I: 2,
  O: 3,
  U: 4
}

const gap = [781, 156, 31, 6, 1]

function solution(word) {
  let answer = word.length;
  
  for (let i = 0; i < word.length; i++) {
      answer += gap[i] * diff[word[i]];
  }
  
  return answer;
}