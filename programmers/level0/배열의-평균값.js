function solution(numbers) {
  const sum = numbers.reduce((accu, curr) => accu + curr, 0);

  return sum / numbers.length;
}
