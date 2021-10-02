function solution(number, k) {
  let answer = "";
  let j = -1;
  const length = number.length - k;
  for (let i = 0; i < length; i++) {
    let max = "-1";
    let maxIndex = -1;
    while (++j < k + i + 1) {
      if (number[j] > max) {
        max = number[j];
        maxIndex = j;
      }
      if (number[j] === "9") break; // 테스트 10번 시간 초과 방지
    }
    j = maxIndex;
    answer += max;
  }

  return answer;
}
