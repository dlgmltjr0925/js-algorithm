function solution(skill, skillTrees) {
  let answer = 0;

  skill = skill.split("");

  function check(skillTree) {
    let index = 0;
    for (let i = 0; i < skillTree.length; i++) {
      const seq = skill.findIndex((s) => s === skillTree[i]);
      if (seq !== -1) {
        if (seq !== index) return false;
        index++;
      }
    }
    return true;
  }

  for (const skillTree of skillTrees) {
    if (check(skillTree)) answer++;
  }

  return answer;
}
