let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 피보나치 수열에서 0과 1이 몇 번씩 출력되는지 확인하는 코드
let zero = 0;
let one = 0;

// 해당 함수를 통해서 0과 1의 개수가 n-1과 n-2라는 것을 알게 되었다.
function fibonachi(n) {
  if (n === 0) {
    zero++;
    return 0;
  } else if (n === 1) {
    one++;
    return 1;
  } else {
    return fibonachi(n - 1) + fibonachi(n - 2);
  }
}

d = new Array(100).fill(0);
d[0] = 0;
d[1] = 1;

// 피보나치 함수 반복문으로 보텀업( = 피보나치 수열을 만들어놓는다.)
for (let i = 2; i <= 40; i++) {
  d[i] = d[i - 1] + d[i - 2];
}

// 테스트 케이스의 개수
let testCase = Number(input[0]);

// 테스트 케이스를 반복문을 통해 돌린다.
for (let t = 1; t <= testCase; t++) {
  // n번째 피보나치 수에 대하여
  let n = Number(input[t]);
  // 0의 개수와 1의 개수 출력
  if (n === 0) console.log(1, 0);
  else console.log(d[n - 1], d[n]);
}
