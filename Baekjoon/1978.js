let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
var a = Number(input[0]);
let b = input[1].split(" ").map((element) => Number(element));

let totalNum = 0;

for (let i = 0; i < a; i++) {
  if (b[i] !== 1) {
    let isPrimeState = true;
    for (let j = 2; j < b[i]; j++) {
      if (b[i] % j === 0) {
        isPrimeState = false;
      }
    }
    if (isPrimeState) {
      totalNum += 1;
    }
  }
}

console.log(totalNum);
