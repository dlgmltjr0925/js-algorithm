function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  const lostObj = {};
  const reserveObj = {};

  for (const student of reserve) {
    reserveObj[student] = true;
  }

  for (const student of lost) {
    if (reserveObj[student]) {
      delete reserveObj[student];
    } else {
      lostObj[student] = true;
    }
  }

  Object.keys(reserveObj).forEach((student) => {
    const i = parseInt(student);
    if (lostObj[i - 1]) {
      delete lostObj[i - 1];
    } else if (lostObj[i + 1]) {
      delete lostObj[i + 1];
    }
  });

  return n - Object.keys(lostObj).length;
}
