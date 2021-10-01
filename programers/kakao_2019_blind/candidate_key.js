function solution(relation) {
  let candidateKeys = [];
  const excludes = {};

  function check(columns) {
    if (
      candidateKeys.some((keys) => keys.every((key) => columns.includes(key)))
    )
      return;
    const keys = {};
    for (let i = 0; i < relation.length; i++) {
      let key = "";
      for (const column of columns) {
        key += relation[i][column];
      }
      if (keys[key]) return;
      keys[key] = true;
    }
    candidateKeys.push(columns);
  }

  function dfs(l, s, columns) {
    if (columns.length === l) {
      return check(columns);
    }
    for (let i = s; i < relation[0].length; i++) {
      dfs(l, i + 1, [...columns, i]);
    }
  }

  for (let i = 1; i <= relation[0].length; i++) {
    dfs(i, 0, []);

    candidateKeys.forEach((keys) => {
      keys.forEach((key) => (excludes[key] = true));
    });
  }

  return candidateKeys.length;
}
