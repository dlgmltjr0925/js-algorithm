// 시간복잡도 O(nlogn)
function solution(cnt, arr) {
  const scoreObj = {};
  const rankObj = {};
  // O(n)
  for (const score of arr) {
    if (scoreObj[score]) scoreObj[score]++;
    else scoreObj[score] = 1;
  }
  // O(nlogn) = O(n) + O(nlogn)
  const sortedArr = Object.keys(scoreObj).sort((a, b) => b - a);
  let rank = 1;
  // O(n)
  for (const score of sortedArr) {
    rankObj[score] = rank;
    rank += scoreObj[score];
  }
  return arr.map((score) => rankObj[score]);
}

console.log(solution(5, [87, 89, 92, 100, 76]));
