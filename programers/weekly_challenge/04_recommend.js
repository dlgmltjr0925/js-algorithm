function solution(tables, languages, preference) {
  const scoreTable = {};
  let max = 0;
  let answer;
  tables.forEach((table) => {
    const [type, ...languages] = table.split(" ");
    scoreTable[type] = {};
    languages.forEach((language, i) => {
      scoreTable[type][language] = 5 - i;
    });
  });
  Object.entries(scoreTable).forEach(([type, scores]) => {
    let sum = 0;
    languages.forEach((language, i) => {
      sum += (scores[language] || 0) * preference[i];
    });
    if (sum > max) {
      max = sum;
      answer = type;
    } else if (sum === max) {
      if (type < answer) {
        answer = type;
      }
    }
  });

  return answer;
}
