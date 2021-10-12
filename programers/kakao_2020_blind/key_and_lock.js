function solution(key, lock) {
  let answer = false;
  const m = key.length;
  const n = lock.length;

  function match(r, c) {
    for (let i = 0; i < lock.length; i++) {
      for (let j = 0; j < lock.length; j++) {
        let keyValue = 0;
        const nr = i + r;
        const nc = j + c;
        if (nr >= 0 && nr < key.length && nc >= 0 && nc < key.length) {
          keyValue = key[nr][nc];
        }
        if (keyValue + lock[i][j] !== 1) return false;
      }
    }

    return true;
  }

  function rotate(key) {
    const newKey = Array.from({ length: key.length }, () => {
      return Array.from({ length: key.length }, () => 0);
    });

    for (let i = 0; i < key.length; i++) {
      for (let j = 0; j < key.length; j++) {
        newKey[j][key.length - 1 - i] = key[i][j];
      }
    }

    return newKey;
  }

  for (let i = 0; i < 4; i++) {
    // 회전
    for (let j = m - 1; j > -n; j--) {
      for (let k = m - 1; k >= -n; k--) {
        if (match(j, k)) return true;
      }
    }
    key = rotate(key);
  }

  return answer;
}
