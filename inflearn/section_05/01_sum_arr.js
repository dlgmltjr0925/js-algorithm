function solution(n1, arr1, n2, arr2) {
  let answer = [];
  let i = 0;
  j = 0;
  for (let k = 0; k < n1 + n2; k++) {
    answer.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[j++]);
    if (i === n1) {
      return answer.concat(arr2.slice(j)).join(" ");
    } else if (j === n2) {
      return answer.concat(arr1.slice(i)).join(" ");
    }
  }
}

console.log(solution(4, [1, 3, 5, 10], 5, [2, 3, 6, 7, 9]));
