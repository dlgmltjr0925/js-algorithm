function solution(name) {
  let answer = Number.MAX_SAFE_INTEGER;

  function modify(c) {
    const d = c.charCodeAt() - 65;
    return Math.min(d, 26 - d);
  }

  function isEqual(name, input) {
    return name === input.join('');
  }

  function dfs(cur, cnt, arr) {
    let count1 = modify(name[cur]);
    arr[cur] = name[cur];

    if (isEqual(name, arr)) {
      answer = Math.min(answer, cnt + count1);
    } else {
      for (const direction of [1, -1]) {
        let cursor = cur;
        let count2 = 0;
        while (name[cursor] === arr[cursor]) {
          count2++;
          cursor += direction;
          if (cursor < 0) cursor = name.length - 1;
          else if (cursor === name.length) cursor = 0;
        }

        dfs(cursor, cnt + count1 + count2, [...arr]);
      }
    }
  }

  dfs(
    0,
    0,
    Array.from({ length: name.length }, () => 'A')
  );

  return answer;
}
