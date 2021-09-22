function solution(new_id) {
  function pad(str) {
    while (str.length < 3) {
      str += str[str.length - 1];
    }
    return str;
  }

  let answer = new_id.toLowerCase();
  answer = answer.replace(/[^a-z\d-_.]/g, '');
  answer = answer.replace(/\.{2,}/g, '.');
  answer = answer.replace(/^\.|\.$/g, '');
  if (answer.length === 0) answer = 'a';
  if (answer.length > 15) answer = answer.slice(0, 15).replace(/\.$/, '');

  return pad(answer);
}
