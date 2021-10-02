function solution(board) {
  let answer = 0;

  if (board.lengh === 1 || board[0].length === 1) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] === 1) return 1;
      }
    }
    return 0;
  }

  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (board[i][j] && board[i - 1][j] && board[i][j - 1]) {
        board[i][j] =
          Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;
        if (board[i][j] > answer) answer = board[i][j];
      }
    }
  }

  return answer ** 2;
}
