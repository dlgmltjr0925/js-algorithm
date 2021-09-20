function sort(str) {
  return str.split("").sort().join("");
}

function solution(str1, str2) {
  return sort(str1) === sort(str2) ? "YES" : "NO";
}

console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));
