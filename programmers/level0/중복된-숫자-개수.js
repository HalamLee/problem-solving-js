function solution(array, n) {
  let cnt = 0;

  for (let i of array) {
    if (i === n) {
      cnt++;
    }
  }

  return cnt;
}
