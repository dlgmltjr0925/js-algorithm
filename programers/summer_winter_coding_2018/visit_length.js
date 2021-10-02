function getNext(x, y, dir) {
  switch (dir) {
    case "U":
      return [x, y + 1];
    case "D":
      return [x, y - 1];
    case "R":
      return [x + 1, y];
    case "L":
      return [x - 1, y];
  }
}

function solution(dirs) {
  let answer = 0;
  const map = {};
  let x = 0;
  let y = 0;

  for (let dir of dirs) {
    const [nx, ny] = getNext(x, y, dir);
    if (Math.abs(nx) <= 5 && Math.abs(ny) <= 5) {
      const key1 = `${x}_${y}_${nx}_${ny}`;
      const key2 = `${nx}_${ny}_${x}_${y}`;
      [x, y] = [nx, ny];
      if (!map[key1] || !map[key2]) {
        map[key1] = true;
        map[key2] = true;
        answer++;
      }
    }
  }

  return answer;
}
