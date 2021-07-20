/**
 * 세 수 중 최솟값
 * 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램
 */

const inputs = [6, 5, 11];

function main(inputs) {
  console.log(Math.min(Math.min(inputs[0], inputs[1]), inputs[2]));
}

main(inputs);
