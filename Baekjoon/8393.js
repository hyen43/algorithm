let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
var a = parseInt(input[0]);

let initialValue = 0;

for (step = 0; step < a + 1; step++) {
  initialValue += step;
}

console.log(initialValue);
