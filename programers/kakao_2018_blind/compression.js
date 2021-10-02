const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(msg) {
  const answer = [];

  const dic = {};
  let count = ALPHABET.length;

  for (let i = 0; i < count; i++) {
    dic[ALPHABET[i]] = ALPHABET[i].charCodeAt() - 64;
  }

  let i = -1;
  let word = "";
  while (++i <= msg.length) {
    if (!dic[word + msg[i]]) {
      answer.push(dic[word]);
      dic[word + msg[i]] = ++count;
      word = msg[i];
    } else {
      word += msg[i];
    }
  }

  return answer;
}
