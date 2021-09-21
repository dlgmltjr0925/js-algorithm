/**
 * N개의 최소 공배수
 * https://myjamong.tistory.com/138
 * 유클리드 호제법(Euclidean Algorithm)으로 gcm(최대공약수)을 구한다
 * lcm(최소공배수) = 두 자연수의 곱 / gcm 공식을 사용하여 lcm을 구한다.
 */
function getGcd(a, b) {
  if (b === 0) return a;
  else return getGcd(b, a % b);
}

function solution(arr) {
  let answer = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const gcd = getGcd(answer, arr[i]);
    answer = (answer * arr[i]) / gcd;
  }

  return answer;
}
