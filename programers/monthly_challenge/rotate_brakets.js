const braket = {
  ']': '[',
  '}': '{',
  ')': '(',
};

function check(arr) {
  const stack = [];
  for (const b of arr) {
    if (/[\]\}\)]/.test(b)) {
      const p = stack.pop();
      if (p !== braket[b]) return false;
    } else {
      stack.push(b);
    }
  }
  return stack.length === 0;
}

function solution(s) {
  let answer = 0;
  const arr = s.split('');

  for (let i = 0; i < s.length; i++) {
    if (check(arr)) answer++;
    arr.push(arr.shift());
  }

  return answer;
}
