function solution(infos, queries) {
  const infoIndex = {};
  const condition = [
    ["cpp", "java", "python", "-"],
    ["backend", "frontend", "-"],
    ["junior", "senior", "-"],
    ["chicken", "pizza", "-"],
  ];

  function setInfoIndex(parent, index) {
    for (let i = 0; i < condition[index].length; i++) {
      parent[condition[index][i]] = {};
      if (index + 1 < condition.length)
        setInfoIndex(parent[condition[index][i]], index + 1);
    }
  }

  setInfoIndex(infoIndex, 0);

  infos.forEach((info) => {
    const [language, position, career, food, score] = info.split(" ");
    for (let l of [language, "-"]) {
      for (let p of [position, "-"]) {
        for (let c of [career, "-"]) {
          for (let f of [food, "-"]) {
            if (!infoIndex[l][p][c][f][score]) infoIndex[l][p][c][f][score] = 0;
            infoIndex[l][p][c][f][score]++;
          }
        }
      }
    }
  });

  return queries.map((query) => {
    let count = 0;

    const [language, position, career, foodAndScore] = query.split(" and ");
    const [food, strScore] = foodAndScore.split(" ");
    const score = parseInt(strScore);

    const info = infoIndex[language][position][career][food];
    Object.entries(info).forEach(([key, value]) => {
      if (parseInt(key) >= score) {
        count += value;
      }
    });

    return count;
  });
}
