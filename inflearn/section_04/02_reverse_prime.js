function reverse(str) {
  let result = "";
  for (let i = str.length; i > 0; i--) {
    result += str[i - 1];
  }
  return result;
}

function getPrimeArr(max) {
  const arr = new Array(max).fill(true);
  arr[0] = false;
  arr[1] = false;
  let j;
  for (let i = 2; i < Math.sqrt(max) + 1; i++) {
    if (arr[i]) {
      j = 2;
      while (i * j <= max) {
        arr[i * j] = false;
        j++;
      }
    }
  }
  return arr;
}

function solution(count, str) {
  const arr = str.split(" ").map((numStr) => parseInt(reverse(numStr)));
  const primeArr = getPrimeArr(Math.max(...arr) + 1);
  return arr.filter((num) => primeArr[num]).join(" ");
}

console.log(solution(9, "32 55 62 20 250 370 200 30 100"));
