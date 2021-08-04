function count(songs, capacity) {
  let cnt = 1,
    sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else {
      sum += x;
    }
  }
  return cnt;
}

function solution(n, m, songs) {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b);

  while (lt <= rt) {
    // mid 값을 dvd 한장의 용량으로 했을 때
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

console.log(solution(9, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
