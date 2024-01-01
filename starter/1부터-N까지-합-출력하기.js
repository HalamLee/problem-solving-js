// 문제
// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

// 입력 설명
// 첫 번째 줄에 20 이하의 자연수 N이 입력된다.

// 출력 설명
// 첫 번째 줄에 1부터 N까지의 합을 출력한다.

// 입력 예제 1
// 6

// 출력 예제 1
// 21

// 입력 예제 2
// 10

// 출력 예제 2
// 55

const solution = (n) => {
  let num = 0;
  let sum = 0;

  while (num < n) {
    num += 1;
    sum += num;
  }

  return sum;
};

export default solution;
