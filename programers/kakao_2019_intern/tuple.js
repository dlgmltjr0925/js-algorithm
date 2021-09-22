function solution(s) {
  const answer = [];
  const arr = s.slice(2, s.length - 2)
      .split('},{')
      .sort((a, b) => a.length - b.length);
  
  for (const e of arr) {
      e.split(',').forEach(v => {
          if (!answer.includes(v)) answer.push(v);
      })
  }
  
  return answer.map(v => parseInt(v));
}