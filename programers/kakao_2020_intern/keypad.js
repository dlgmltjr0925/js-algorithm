function solution(numbers, hand) {
  let answer = '';
  const pad = {
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };
  for (let i = 0; i < 9; i++) {
    pad[i + 1] = [Math.floor(i / 3), i % 3];
  }
  let lpos = [3, 0];
  let rpos = [3, 2];

  for (const number of numbers) {
    const pos = pad[number];

    if (pos[1] === 0) {
      answer += 'L';
      lpos = pos;
    } else if (pos[1] === 2) {
      answer += 'R';
      rpos = pos;
    } else {
      const ldiff = Math.abs(pos[0] - lpos[0]) + Math.abs(pos[1] - lpos[1]);
      const rdiff = Math.abs(pos[0] - rpos[0]) + Math.abs(pos[1] - rpos[1]);

      if (ldiff < rdiff) {
        answer += 'L';
        lpos = pos;
      } else if (ldiff > rdiff) {
        answer += 'R';
        rpos = pos;
      } else {
        if (hand === 'left') {
          answer += 'L';
          lpos = pos;
        } else {
          answer += 'R';
          rpos = pos;
        }
      }
    }
  }
  return answer;
}
