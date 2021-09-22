function getPrimes(maxNumber) {
  const primes = Array.from({ length: maxNumber + 1 }, () => true);
  primes[0] = false;
  primes[1] = false;
  for (let i = 2; i < Math.sqrt(maxNumber) + 1; i++) {
    if (!primes[i]) continue;

    for (let j = i + i; j < maxNumber + 1; j += i) {
      primes[j] = false;
    }
  }

  return primes;
}

function solution(nums) {
  let answer = 0;
  nums.sort((a, b) => a - b);
  const max = nums.slice(-3).reduce((a, b) => a + b);
  const primes = getPrimes(max);

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (primes[sum]) answer++;
      }
    }
  }

  return answer;
}
