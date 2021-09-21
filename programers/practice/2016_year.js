const daysOfMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const weeks = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

function solution(a, b) {
  let days = b;
  for (let i = 0; i < a; i++) {
    days += daysOfMonth[i];
  }
  return weeks[days % 7];
}
