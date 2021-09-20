function solution(a, b, c) {
  let arr = [a, b, c];
  if (arr[0] > arr[1]) {
    const temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }
  if (arr[1] > arr[2]) {
    const temp = arr[1];
    arr[1] = arr[2];
    arr[2] = temp;
  }
  const result = arr[0] + arr[1] > arr[2] ? "YES" : "NO";
  console.log(result);
}

solution(13, 33, 17);
