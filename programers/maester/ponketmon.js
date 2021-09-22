function solution(nums) {
  const numObj = {};
  let count = 0;
  for (const num of nums) {
    if (!numObj[num]) {
      numObj[num] = true;
      count++;
    }
  }

  return Math.min(nums.length / 2, count);
}
