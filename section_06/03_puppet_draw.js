function solution(boards, moves) {
  let answer = 0;
  const stack = [];

  for (const m of moves) {
    for (let i = 0; i < boards.length; i++) {
      const puppet = boards[i][m - 1];
      if (puppet !== 0) {
        if (stack.length > 0 && stack[stack.length - 1] === puppet) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(puppet);
        }
        boards[i][m - 1] = 0;
        break;
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
