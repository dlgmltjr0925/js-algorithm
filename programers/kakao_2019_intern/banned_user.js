function solution(userIds, bannedIds) {
  let answer = 0;
  const matches = Array.from({ length: bannedIds.length }, () => []);
  const checked = {};
  const combinations = {};

  for (let i = 0; i < bannedIds.length; i++) {
    const bannedId = bannedIds[i];
    const bannedIdRegExp = new RegExp(
      `^${bannedId.replace(/\*/g, "[a-z\\d]{1}")}\$`
    );
    for (let j = 0; j < userIds.length; j++) {
      const userId = userIds[j];
      if (bannedIdRegExp.test(userId)) {
        matches[i].push(userId);
      }
    }
  }

  function dfs(l) {
    if (l === bannedIds.length) {
      const ids = Object.keys(checked).sort().join("_");
      if (!combinations[ids]) {
        combinations[ids] = true;
        answer++;
      }
      return;
    }

    for (const userId of matches[l]) {
      if (checked[userId]) continue;
      checked[userId] = true;
      dfs(l + 1);
      delete checked[userId];
    }
  }

  dfs(0);

  return answer;
}
