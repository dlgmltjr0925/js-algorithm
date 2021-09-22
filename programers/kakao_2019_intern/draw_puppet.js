function solution(board, moves) {
  let answer = 0;

  const boardTops = Array.from({ length: board.length }, (_, index) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][index] !== 0) return i;
    }
    return board.length;
  });

  const stack = [];

  for (const i of moves) {
    const top = boardTops[i - 1];
    if (top !== board.length) {
      const num = board[top][i - 1];
      if (stack.length > 0 && stack[stack.length - 1] === num) {
        stack.pop();
        answer += 2;
      } else {
        stack.push(num);
      }
      boardTops[i - 1]++;
    }
  }

  return answer;
}
