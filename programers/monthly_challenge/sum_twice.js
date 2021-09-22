function solution(numbers) {
  const answer = {};
  numbers.sort((a, b) => a - b);

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer[numbers[i] + numbers[j]] = true;
    }
  }

  return Object.keys(answer).map((str) => parseInt(str));
}
