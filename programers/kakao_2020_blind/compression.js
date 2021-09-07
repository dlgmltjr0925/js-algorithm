function solution(s) {
  let answer = s.length;
  
  for (let i = 0; i < s.length / 2; i++) {
      let comp = '';
      let word = '';
      let count = 0;
      for (let j = 0; j < s.length; j += i + 1) {
          const sliceWord = s.slice(j, j + i + 1);
          if (word === sliceWord) {
              count++;
          } else {
              if (count > 1) {
                  comp += word + count;
              } else if (count > 0) {
                  comp += word;
              }
              word = sliceWord;
              count = 1;
          }
      }
      comp += word;
      if (count > 1) comp += count;
      if (comp.length < answer) {
          answer = comp.length;
      }
  }
  return answer;
}