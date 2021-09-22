function solution(s) {
  let answer = '';

  let index = 0;

  while (index < s.length) {
    if (/\d/.test(s[index])) {
      answer += s[index];
      index++;
    } else {
      switch (s[index]) {
        case 'z':
          answer += '0';
          index += 4;
          break;
        case 'o':
          answer += '1';
          index += 3;
          break;
        case 't':
          if (s[index + 1] === 'w') {
            answer += '2';
            index += 3;
          } else {
            answer += '3';
            index += 5;
          }
          break;
        case 'f':
          if (s[index + 1] === 'o') {
            answer += '4';
            sss;
          } else {
            answer += '5';
          }
          index += 4;
          break;
        case 's':
          if (s[index + 1] === 'i') {
            answer += '6';
            index += 3;
          } else {
            answer += '7';
            index += 5;
          }
          break;
        case 'e':
          answer += '8';
          index += 5;
          break;
        case 'n':
          answer += '9';
          index += 4;
          break;
      }
    }
  }

  return parseInt(answer);
}
