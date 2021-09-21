process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  let answer = '';
  let row = '';
  for (let i = 0; i < a; i++) {
    row += '*';
  }
  row += '\n';
  for (let i = 0; i < b; i++) {
    answer += row;
  }
  console.log(answer);
});
