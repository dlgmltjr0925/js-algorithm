const board = [
  [0, -1, 1],
  [1, 0, -1],
  [-1, 1, 0],
];

function rockPaperScissor(p1, p2) {
  return board[p1][p2];
}

function solution(count, arr1, arr2) {
  for (let i = 0; i < count; i++) {
    const result = rockPaperScissor(arr1[i] - 1, arr2[i] - 1);
    switch (result) {
      case 0:
        console.log("D");
        break;
      case 1:
        console.log("A");
        break;
      case -1:
        console.log("B");
        break;
    }
  }
}

solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);
