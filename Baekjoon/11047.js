let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const value = input[0].split(" ").map(Number);
const N = value[0];
let K = value[1];

let valueArr = [];

for (i = 1; i < input.length; i++) {
  valueArr.push(Number(input[i]));
}

valueArr.sort(function (a, b) {
  return b - a;
});

let minimunNum = 0;

for (i = 0; i < N; i++) {
  // 총 금액보다 크면 무시한다.
  if (valueArr[i] > K) continue;
  //총 금액보다 작았을 때 몫을 구한다.
  let share = Math.floor(K / valueArr[i]);
  minimunNum += share;
  K -= share * valueArr[i]; //(= K %= valueArr[i])
}
console.log(minimunNum);
