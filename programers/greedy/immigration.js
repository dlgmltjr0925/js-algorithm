function solution(n, times) {
  let answer = 0;

  times.sort((a, b) => b - a);

  let max = Math.ceil((times[0] * n) / times.length);
  let min = Math.floor((times[times.length - 1] * n) / times.length);

  function check(mid) {
    let count = n;
    for (const time of times) {
      count -= parseInt(mid / time);
      if (count <= 0) return true;
    }
    return false;
  }

  while (min <= max) {
    const mid = parseInt((max + min) / 2);
    if (check(mid)) {
      answer = mid;
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return answer;
}
