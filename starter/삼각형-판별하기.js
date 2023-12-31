// 문제
// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

// 입력 설명
// 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.

// 출력 설명
// 첫 번째 줄에 “YES", "NO"를 출력한다.

// 입력 예제 1
// 6 7 11

// 출력 예제 1
// YES

// 입력 예제 2
// 13, 33, 17

// 출력 예제 2
// NO

// 삼각형의 조건: 제일 긴 변의 길이는 나머지 변의 길이를 다 합한 것보다 작아야 한다.
const solution = (A, B, C) => {
  const arr = [A, B, C];
  let max = 0;
  let sum = 0;

  arr.forEach((el) => {
    max = max > el ? max : el;
  });

  const result =
    max < arr.filter((el) => el !== max).reduce((acc, cur) => acc + cur);

  return result ? 'YES' : 'NO';
};

export default solution;
