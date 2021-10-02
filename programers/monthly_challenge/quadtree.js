const dr = [0, 1, 0, 1];
const dc = [0, 0, 1, 1];

function solution(arr) {
  let zeroCount = 0;
  let oneCount = 0;

  function isCompressible(sr, sc, l) {
    let base = arr[sr][sc];
    for (let i = sr; i < sr + l; i++) {
      for (let j = sc; j < sc + l; j++) {
        if (arr[i][j] !== base) return false;
      }
    }
    return true;
  }

  function dfs(sr, sc, l) {
    if (isCompressible(sr, sc, l)) {
      arr[sr][sc] === 0 ? zeroCount++ : oneCount++;
    } else {
      const half = l / 2;
      for (let i = 0; i < 4; i++) {
        dfs(sr + dr[i] * half, sc + dc[i] * half, half);
      }
    }
  }

  dfs(0, 0, arr.length);

  return [zeroCount, oneCount];
}
